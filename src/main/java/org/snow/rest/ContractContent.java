package org.snow.rest;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "CONTRACTCONTENT")
public class ContractContent {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "CONTRACT_ID")
    @NotNull
    private Long contractid;

    @Column(name = "ORDERID")
    @NotNull
    private Long orderid;

    @Column(name = "INPUTENAME", length = 40, unique = false)
    @NotNull
    @Size(min = 1, max = 40)
    private String inputename;

    @Column(name = "INPUTNAME", length = 40, unique = false)
    @NotNull
    @Size(min = 1, max = 40)
    private String inputname;

    @Column(name = "INPUTTYPE", length = 20, unique = false)
    @NotNull
    @Size(min = 1, max = 20)
    private String inputtype;

    @Column(name = "INPUTVALUE", length = 100, unique = false)
    @Size(min = 0, max = 100)
    private String inputvalue;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getContractid() {
        return contractid;
    }

    public void setContractid(Long contractid) {
        this.contractid = contractid;
    }

    public String getInputename() {
        return inputename;
    }

    public void setInputename(String inputename) {
        this.inputename = inputename;
    }

    public String getInputname() {
        return inputname;
    }

    public void setInputname(String inputname) {
        this.inputname = inputname;
    }

    public String getInputtype() {
        return inputtype;
    }

    public void setInputtype(String inputtype) {
        this.inputtype = inputtype;
    }

    public String getInputvalue() {
        return inputvalue;
    }

    public void setInputvalue(String inputvalue) {
        this.inputvalue = inputvalue;
    }


    public Long getOrderid() {
        return orderid;
    }

    public void setOrderid(Long orderid) {
        this.orderid = orderid;
    }
}
