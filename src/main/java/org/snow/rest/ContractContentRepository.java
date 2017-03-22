package org.snow.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(collectionResourceRel = "contractcontents", path = "/contractcontents")
public interface ContractContentRepository extends PagingAndSortingRepository<ContractContent, Long> {

}