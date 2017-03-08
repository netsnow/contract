package org.snow.rest;

import org.snow.model.security.User;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "DEPARMENT")
public class Deparment {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "DEPARMENTNAME", length = 50, unique = true)
    @NotNull
    @Size(min = 4, max = 50)
    private String departmentname;

    @Column(name = "DEPARMENTSHORTNAME", length = 10, unique = true)
    @NotNull
    @Size(min = 4, max = 10)
    private String departmentshortname;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "DEPARMENT_ID", referencedColumnName = "ID")
    private List<User> users;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "DEPARMENT_ID", referencedColumnName = "ID")
    private List<Contract> contracts;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDepartmentname() {
        return departmentname;
    }

    public void setDepartmentname(String departmentname) {
        this.departmentname = departmentname;
    }

    public String getDepartmentshortname() {
        return departmentshortname;
    }

    public void setDepartmentshortname(String departmentshortname) {
        this.departmentshortname = departmentshortname;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Contract> getContracts() {
        return contracts;
    }

    public void setContracts(List<Contract> contracts) {
        this.contracts = contracts;
    }

}
