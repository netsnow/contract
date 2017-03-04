package org.snow.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(collectionResourceRel = "contracts", path = "/contracts")
@PreAuthorize("hasRole('ADMIN')")
public interface ContractsRepository extends PagingAndSortingRepository<Contract, Long> {

}