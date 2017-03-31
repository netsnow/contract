package org.snow.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "myProps",locations = "classpath:application.yml")
public class MyPropsConfig {
    private String rootpath;

    public String getRootpath(){
        return  rootpath;
    }

    public void setRootpath(String rootpath){
        this.rootpath = rootpath;
    }

}
