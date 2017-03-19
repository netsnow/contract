package org.snow.rest;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "TEMPLATEDEFINE")
public class TemplateDefine {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "INPUTNAME", length = 50, unique = false)
    @NotNull
    @Size(min = 4, max = 50)
    private String inputname;

    @Column(name = "INPUTENAME", length = 50, unique = false)
    @NotNull
    @Size(min = 4, max = 50)
    private String inputename;

    @Column(name = "INPUTTYPE", length = 50, unique = false)
    @NotNull
    @Size(min = 4, max = 50)
    private String inputtype;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInputname() {
        return inputname;
    }

    public void setInputname(String inputname) {
        this.inputname = inputname;
    }

    public String getInputename() {
        return inputename;
    }

    public void setInputename(String inputename) {
        this.inputename = inputename;
    }

    public String getInputtype() {
        return inputtype;
    }

    public void setInputtype(String inputtype) {
        this.inputtype = inputtype;
    }

}
