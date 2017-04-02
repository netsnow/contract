package org.snow.rest;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource(collectionResourceRel = "numseqs", path = "/numseqs")
public interface NumSeqRepository extends CrudRepository<NumSeq, String> {

}