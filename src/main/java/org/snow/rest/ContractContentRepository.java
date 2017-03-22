package org.snow.rest;

import org.snow.model.security.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "contractcontents", path = "/contractcontents")
public interface ContractContentRepository extends PagingAndSortingRepository<ContractContent, Long> {
    List<ContractContent> findByContractid(@Param("id") Long id);
}