package org.zerhusen.rest;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Table(name = "REPORT")
public class Report {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "REPORTNAME", length = 50, unique = true)
    @NotNull
    @Size(min = 4, max = 50)
    private String reportname;

    @Column(name = "REPORTTIME")
    @Temporal(TemporalType.DATE)
    @NotNull
    private Date reporttime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReportname() {
        return reportname;
    }

    public void setReportname(String reportname) {
        this.reportname = reportname;
    }

    public Date getReportTime() {
        return reporttime;
    }

    public void setReportTime(Date reporttime) {
        this.reporttime = reporttime;
    }
}