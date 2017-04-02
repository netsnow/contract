package org.snow.rest;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "NUMSEQ")
public class NumSeq {

    @Id
    @Column(name = "SEQKEY", length =20, unique = true)
    @Size(min = 1, max = 20)
    private String seqkey;

    @Column(name = "SEQVALUE", unique = false)
    private int seqvalue;


    public String getSeqkey() {
        return seqkey;
    }

    public void setSeqkey(String seqkey) {
        this.seqkey = seqkey;
    }

    public int getSeqvalue() {
        return seqvalue;
    }

    public void setSeqvalue(int seqvalue) {
        this.seqvalue = seqvalue;
    }
}
