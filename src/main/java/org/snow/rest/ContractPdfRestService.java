package org.snow.rest;

import com.lowagie.text.DocumentException;
import com.lowagie.text.pdf.AcroFields;
import com.lowagie.text.pdf.BaseFont;
import com.lowagie.text.pdf.PdfReader;
import com.lowagie.text.pdf.PdfStamper;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;

@RestController
public class ContractPdfRestService {

    @RequestMapping(path = "/contractpdf/{no}&{tid}", method = RequestMethod.POST)
    public static String saveContractPdf(@PathVariable("no") String contractno ,@PathVariable("tid") Long templateid ,@RequestBody String jsonstr) throws IOException, DocumentException,JSONException {
        //1 准备要填充的数据
        JSONObject jsObj = new JSONObject(jsonstr);
        Iterator<String> it = jsObj.keys();
        HashMap paraMap = new HashMap();
        while (it.hasNext()) {
            String json_key = it.next();
            Object json_value = jsObj.get(json_key);
            if (json_value!=null){
                paraMap.put(json_key,json_value);
            }
        }
        //2 读入pdf表单
        //String webroot = contractApplication.class.getResource("/").getPath();
        String root = System.getProperty("user.dir");

        PdfReader reader = new PdfReader("build/resources/main/static/tmpdata/pdf/template/"+templateid+".pdf");
        //3 根据表单生成一个新的pdf
        PdfStamper ps = new PdfStamper(reader,new FileOutputStream("build/resources/main/static/tmpdata/pdf/web/contractpdf/C"+contractno+".pdf"));
        //4 获取pdf表单
        AcroFields s = ps.getAcroFields();
        //5给表单添加中文字体 这里采用系统字体。不设置的话，中文可能无法显示
        BaseFont bf = BaseFont.createFont("build/resources/main/static/tmpdata/pdf/template/simsun.ttc,1",BaseFont.IDENTITY_H, BaseFont.NOT_EMBEDDED);
        //BaseFont bf = BaseFont.createFont("STSong-Light","UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
        s.addSubstitutionFont(bf);
        //6遍历pdf表单表格，同时给表格赋值
        //s.setField("fill_2", "1111");
        HashMap fieldMap = s.getFields();
        Set set = fieldMap.entrySet();
        Iterator iterator = set.iterator();
        while(iterator.hasNext()){
            java.util.Map.Entry entry = (java.util.Map.Entry) iterator.next();
            String key = (String)entry.getKey();
            if(paraMap.get(key)!=null){
                s.setField(key, ""+paraMap.get(key));
            }
        }
        ps.setFormFlattening(true); // 这句不能少
        ps.close();
        reader.close();
        return "ok666";
    }

    @RequestMapping(path = "/approvepdf", method = RequestMethod.POST)
    public static String saveApprovePdf(@PathVariable("no") String contractno ,@RequestBody String jsonstr) throws IOException, DocumentException,JSONException {
        //1 准备要填充的数据
        JSONObject jsObj = new JSONObject(jsonstr);
        Iterator<String> it = jsObj.keys();
        HashMap paraMap = new HashMap();
        while (it.hasNext()) {
            String json_key = it.next();
            Object json_value = jsObj.get(json_key);
            if (json_value!=null){
                paraMap.put(json_key,json_value);
            }
        }
        //2 读入pdf表单
        //String webroot = contractApplication.class.getResource("/").getPath();
        String root = System.getProperty("user.dir");

        PdfReader reader = new PdfReader("build/resources/main/static/tmpdata/pdf/template/approve.pdf");
        //3 根据表单生成一个新的pdf
        PdfStamper ps = new PdfStamper(reader,new FileOutputStream("build/resources/main/static/tmpdata/pdf/web/contractpdf/A"+contractno+".pdf"));
        //4 获取pdf表单
        AcroFields s = ps.getAcroFields();
        //5给表单添加中文字体 这里采用系统字体。不设置的话，中文可能无法显示
        BaseFont bf = BaseFont.createFont("build/resources/main/static/tmpdata/pdf/template/simsun.ttc,1",BaseFont.IDENTITY_H, BaseFont.NOT_EMBEDDED);
        //BaseFont bf = BaseFont.createFont("STSong-Light","UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
        s.addSubstitutionFont(bf);
        //6遍历pdf表单表格，同时给表格赋值
        //s.setField("fill_2", "1111");
        HashMap fieldMap = s.getFields();
        Set set = fieldMap.entrySet();
        Iterator iterator = set.iterator();
        while(iterator.hasNext()){
            java.util.Map.Entry entry = (java.util.Map.Entry) iterator.next();
            String key = (String)entry.getKey();
            if(paraMap.get(key)!=null){
                s.setField(key, ""+paraMap.get(key));
            }
        }
        ps.setFormFlattening(true); // 这句不能少
        ps.close();
        reader.close();
        return "ok666";
    }

    @RequestMapping(path = "/contentget", method = RequestMethod.POST)
    public static String contentget(@RequestBody String jsonstr) throws JSONException {
        JSONObject jsObj = new JSONObject(jsonstr);
        Iterator<String> it = jsObj.keys();
        String str = "";
        while (it.hasNext()) {
            String json_key = it.next();
            Object json_value = jsObj.get(json_key);
            if (json_value!=null){
                str = str + "//////json_key:" + json_key + ",json_value:" + json_value + ",类型:" + json_value.getClass().getSimpleName();
            }
        }

        return str;
    }
    //@RequestMapping(path = "/pdfbox/{id}", method = RequestMethod.GET)
    //public static String saveContractPdfpdfbox(@PathVariable("id") String id) throws IOException {
    //    String formTemplate = "src/main/resources/static/tmpdata/pdf/template/template1.pdf";
    //
    //    // load the document
    //    PDDocument pdfDocument = PDDocument.load(new File(formTemplate));
    //    PDAcroForm acroForm = pdfDocument.getDocumentCatalog().getAcroForm();
    //
    //    if (acroForm != null){
    //        PDTextField field = (PDTextField) acroForm.getField( "fill_2" );
    //        //b = sa.getBytes("utf-8");//编码
    //        //sa = new String(b, "utf-8");//解码
    //        //field.setValue(String.valueOf(name.getBytes("GBK")));
    //        field.setValue("1111");
    //        //field = (PDTextField) acroForm.getField( "fieldsContainer.nestedSampleField" );
    //        //field.setValue("Text Entry");
    //    }
    //    pdfDocument.save("src/main/resources/static/tmpdata/pdf/contract2.pdf");
    //    pdfDocument.close();
    //    return "ok";
    //}

}
