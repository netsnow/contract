package org.snow.rest;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class ContractContent {


    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "INPUTNAME", length = 40, unique = false)
    @NotNull
    @Size(min = 1, max = 40)
    private String inputname;

    @Column(name = "INPUTTYPE", length = 20, unique = false)
    @NotNull
    @Size(min = 1, max = 20)
    private String inputtype;

    @Column(name = "INPUTVALUE", length = 100, unique = false)
    @NotNull
    @Size(min = 1, max = 100)
    private String inputvalue;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContractno() {
        return contractno;
    }

    public void setContractno(String contractno) {
        this.contractno = contractno;
    }

    public String getContractname() {
        return contractname;
    }

    public void setContractname(String contractname) {
        this.contractname = contractname;
    }


}
