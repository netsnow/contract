package org.snow.rest;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "CONTRACT")
public class Contract {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "CONTRACTNO", length = 50, unique = false)
    //@NotNull
    @Size(min = 0, max = 50)
    private String contractno;

    @Column(name = "CONTRACTNAME", length = 50, unique = false)
    @NotNull
    @Size(min = 1, max = 50)
    private String contractname;

    @Column(name = "OTHERPARTYNAME", length = 50, unique = false)
    @NotNull
    @Size(min = 1, max = 50)
    private String otherpartyname;

    @Column(name = "DEPARTMENTNAME", length = 50, unique = false)
    @Size(min = 0, max = 50)
    private String departmentname;

    @Column(name = "CREATORNAME", length = 50, unique = false)
    @NotNull
    @Size(min = 1, max = 50)
    private String creatorname;

    @Column(name = "ATTACHMENT", length = 50, unique = false)
    @Size(min = 0, max = 50)
    private String attachment;

    @Column(name = "CREATTIME")
    @Temporal(TemporalType.DATE)
    @NotNull
    private Date creattime;

    @Column(name = "ENABLED", length = 30)
    @NotNull
    @Size(min = 0, max = 30)
    //0 编辑中 ，1 待审核 ，2 已审核 ， 9 审核驳回
    private String enabled;

    @Column(name = "TEMPLATEID")
    @NotNull
    private Long templateid;

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

    public String getEnabled() {
        return enabled;
    }

    public void setEnabled(String enabled) {
        this.enabled = enabled;
    }

    public String getOtherpartyname() {
        return otherpartyname;
    }

    public void setOtherpartyname(String otherpartyname) {
        this.otherpartyname = otherpartyname;
    }

    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }

    public Long getTemplateid() {
        return templateid;
    }

    public void setTemplateid(Long templateid) {
        this.templateid = templateid;
    }
}
