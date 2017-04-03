'use strict';

/* Controllers */

angular.module('app')
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window','$http','$state',
    function(              $scope,   $translate,   $localStorage,   $window , $http , $state) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');

      // config
      $scope.app = {
        name: 'Contract',
        version: '1.3.3',
        // for chart colors
        color: {
          primary: '#7266ba',
          info:    '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger:  '#f05050',
          light:   '#e8eff0',
          dark:    '#3a3f51',
          black:   '#1c2b36'
        },
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-black',
          navbarCollapseColor: 'bg-white-only',
          asideColor: 'bg-black',
          headerFixed: true,
          asideFixed: false,
          asideFolded: false,
          asideDock: false,
          container: false
        }
      }

      // save settings to local storage
      if ( angular.isDefined($localStorage.settings) ) {
        $scope.app.settings = $localStorage.settings;
      } else {
        $localStorage.settings = $scope.app.settings;
      }
      $scope.$watch('app.settings', function(){
        if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
          // aside dock and fixed must set the header fixed.
          $scope.app.settings.headerFixed = true;
        }
        // save to local storage
        $localStorage.settings = $scope.app.settings;
      }, true);

      // angular translate
      $scope.lang = { isopen: false };
      $scope.langs = {en:'English', de_DE:'German', it_IT:'Italian'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
      $scope.setLang = function(langKey, $event) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
      };

      function isSmartDevice( $window )
      {
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }
    // INITIAL CALLS =============================================================
    function getJwtToken() {
        return localStorage.getItem("jwtToken");
    }

    if (!getJwtToken()) {
        window.location.href = "http://"+window.location.host+"#/access/signin";
    }else{
      $http.get('user',{ headers : {'Authorization' : getJwtToken() }})
      .then(function(response) {
        if ( !response.data.username ) {
          window.location.href = "http://"+window.location.host+"#/access/signin";
        }else{
          //username set
          $scope.username = response.data.username;

          //deparment set
          $http.get('departments/'+response.data.departmentId,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
              //var deparmentid = largeLoad._embedded.users[0].deparmentId;
              //$http.get('departments/'+deparmentid,{ headers : {'Authorization' : localStorage.getItem("jwtToken") }}).success(function (largeLoad) {
                  $scope.departmentname = largeLoad.departmentname
                  $scope.departmentshortname = largeLoad.departmentshortname
                  //alert($scope.departmentname);
              //});
          });
          //menu set
          var role = 0;
          $.each(response.data.authorities,function(idx, obj) {
            if(obj.authority == "ROLE_USER"){
              role = role + 1;
              $scope.usernavflg = true;
            }
            if(obj.authority == "ROLE_ADMIN"){
              role = role + 2;
              $scope.adminnavflg = true;
            }
          });
          if(role >= 2){
            $state.go('app.dashboard-v1');
          }else{
            $state.go('app.user_dashboard');
          }
        }
      }, function(x) {
        window.location.href = "http://"+window.location.host+"#/access/signin";
      });
    }

  }]);