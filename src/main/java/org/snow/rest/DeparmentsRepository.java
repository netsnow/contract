package org.snow.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(collectionResourceRel = "departments", path = "/departments")
@PreAuthorize("hasRole('ADMIN')")
public interface DeparmentsRepository extends PagingAndSortingRepository<Deparment, Long> {

}