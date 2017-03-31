package org.snow.rest;

import org.snow.config.MyPropsConfig;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestRestService {

    @RequestMapping(path = "/testget", method = RequestMethod.GET)
    public static String testget() {
        MyPropsConfig myprops = new MyPropsConfig();
        //String root = myprops.getRootpath();
        String root = System.getProperty("user.dir");
        return root;
    }
}
