package org.snow.rest;

import org.snow.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@RestController
public class FileUploadController {
    private final StorageService storageService;

    @Autowired
    public FileUploadController(StorageService storageService) {
        this.storageService = storageService;
    }

    @RequestMapping(path = "/contractfileupload", method = RequestMethod.POST)
    public String handleFileUpload(@RequestParam("file") MultipartFile file, @RequestParam("filename") String filename , HttpServletRequest request){
        //String fileName = file.getOriginalFilename();
        //String prefix=fileName.substring(fileName.lastIndexOf(".")+1);
        //String newfileName = contractno + "."+ prefix;
        storageService.store(file,filename);
        //MyPropsConfig myprops = new MyPropsConfig();
        //myprops.getRootpath();
        //URL path = ClassLoader.getSystemResource("");
        //ServletContext context = this.ge
        //Resource res = new ServletContextResource(context,"a.txt");
        return filename;
    }

}
