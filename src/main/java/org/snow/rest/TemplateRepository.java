package org.snow.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(collectionResourceRel = "templates", path = "/templates")
@PreAuthorize("hasRole('ADMIN')")
public interface TemplateRepository extends PagingAndSortingRepository<Contract, Long> {

}