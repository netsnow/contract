package org.snow.rest;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDTextField;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;

@RestController
public class ContractPdfRestService {
    @RequestMapping(path = "/contractpdf/{id}", method = RequestMethod.GET)
    public static String saveContractPdf(@PathVariable("id") String id) throws IOException {
        String formTemplate = "src/main/resources/static/tmpdata/pdf/template/template1.pdf";

        // load the document
        PDDocument pdfDocument = PDDocument.load(new File(formTemplate));

        PDAcroForm acroForm = pdfDocument.getDocumentCatalog().getAcroForm();

        if (acroForm != null){
            PDTextField field = (PDTextField) acroForm.getField( "fill_2" );
            field.setValue("白雪");

            //field = (PDTextField) acroForm.getField( "fieldsContainer.nestedSampleField" );
            //field.setValue("Text Entry");
        }
        pdfDocument.save("src/main/resources/static/tmpdata/pdf/contract1.pdf");
        pdfDocument.close();
        return "ok";
    }

}
