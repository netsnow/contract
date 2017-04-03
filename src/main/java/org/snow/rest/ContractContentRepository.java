package org.snow.rest;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "contractcontents", path = "/contractcontents")
public interface ContractContentRepository extends PagingAndSortingRepository<ContractContent, Long> {
    @Query("select u from ContractContent u where u.contractid = ?1 order by u.orderid" )
    List<ContractContent> findByContractid(@Param("id") Long id);
}