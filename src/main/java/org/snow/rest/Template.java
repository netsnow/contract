package org.snow.rest;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "TEMPLATE")
public class Template {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "TEMPLATENAME", length = 50, unique = true)
    @NotNull
    @Size(min = 4, max = 50)
    private String templatename;

    @Column(name = "TEMPLATETYPE", length = 50, unique = false)
    @NotNull
    @Size(min = 4, max = 50)
    private String templatetype;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "Template_ID", referencedColumnName = "ID")
    private List<TemplateDefine> templateDefines;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTemplatename() {
        return templatename;
    }

    public void setTemplatename(String templatename) {
        this.templatename = templatename;
    }

    public String getTemplatetype() {
        return templatetype;
    }

    public void setTemplatetype(String templatetype) {
        this.templatetype = templatetype;
    }

    public List<TemplateDefine> getTemplateDefines() {
        return templateDefines;
    }

    public void setTemplateDefines(List<TemplateDefine> templateDefines) {
        this.templateDefines = templateDefines;
    }


}
