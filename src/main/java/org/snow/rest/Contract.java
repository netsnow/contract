package org.snow.rest;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
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

}
