package org.snow.rest;

import org.snow.storage.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;

@RestController
public class NumSeqController {
    @Autowired
    private NumSeqRepository numSeqRepository;

    @RequestMapping(path = "/numseqget/{key}", method = RequestMethod.GET)
    public int numseqGet(@PathVariable("key") String key , HttpServletRequest request){
        //1,用key检索seq
        boolean isExsists = this.numSeqRepository.exists(key);

        if(isExsists){
        //2，检索到则返回该key的value，并且update该key的value=value+1
            NumSeq numSeq = this.numSeqRepository.findOne(key);
            int rtnvalue = numSeq.getSeqvalue();
            numSeq.setSeqvalue(rtnvalue + 1);
            this.numSeqRepository.save(numSeq);
            return rtnvalue;
        }else{
        //3，没检索到，则插入该key，value=1，返回1
            NumSeq numSeq = new NumSeq();
            numSeq.setSeqkey(key);
            numSeq.setSeqvalue(1);
            this.numSeqRepository.save(numSeq);
            return 1;
        }
    }
}
