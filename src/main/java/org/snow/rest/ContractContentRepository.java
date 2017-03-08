package org.snow.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(collectionResourceRel = "contractcontents", path = "/contractcontents")
@PreAuthorize("hasRole('ADMIN')")
public interface ContractContentRepository extends PagingAndSortingRepository<ContractContent, Long> {

}