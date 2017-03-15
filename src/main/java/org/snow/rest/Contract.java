package org.snow.rest;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "CONTRACT")
public class Contract {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "CONTRACTNO", length = 15, unique = true)
    @NotNull
    @Size(min = 4, max = 15)
    private String contractno;

    @Column(name = "CONTRACTNAME", length = 50, unique = false)
    @NotNull
    @Size(min = 4, max = 50)
    private String contractname;

    @Column(name = "DEPARTMENTNAME", length = 50, unique = false)
    @NotNull
    @Size(min = 4, max = 50)
    private String departmentname;

    @Column(name = "CREATORNAME", length = 50, unique = false)
    @NotNull
    @Size(min = 4, max = 50)
    private String creatorname;

    @Column(name = "CREATTIME")
    @Temporal(TemporalType.DATE)
    @NotNull
    private Date creattime;

    @Column(name = "ENABLED")
    @NotNull
    private Boolean enabled;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "CONTRACT_ID", referencedColumnName = "ID")
    private List<ContractContent> contractContents;

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

    public List<ContractContent> getContractContents() {
        return contractContents;
    }

    public void setContractContents(List<ContractContent> contractContents) {
        this.contractContents = contractContents;
    }
    public String getDepartmentname() {
        return departmentname;
    }

    public void setDepartmentname(String departmentname) {
        this.departmentname = departmentname;
    }

    public String getCreatorname() {
        return creatorname;
    }

    public void setCreatorname(String creatorname) {
        this.creatorname = creatorname;
    }

    public Date getCreattime() {
        return creattime;
    }

    public void setCreattime(Date creattime) {
        this.creattime = creattime;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

}
