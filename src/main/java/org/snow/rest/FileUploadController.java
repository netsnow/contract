package org.snow.rest;

import org.snow.config.MyPropsConfig;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.net.URL;

@RestController
public class FileUploadController {
    @RequestMapping(path = "/contractfileupload", method = RequestMethod.POST)
    public String handleFileUpload(@RequestParam("file") MultipartFile file, HttpServletRequest request){

        MyPropsConfig myprops = new MyPropsConfig();
        myprops.getRootpath();
        URL path = ClassLoader.getSystemResource("");
        //ServletContext context = this.ge
        //Resource res = new ServletContextResource(context,"a.txt");
        return "OK";
    }

}
