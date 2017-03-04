package org.snow.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(collectionResourceRel = "deparments", path = "/deparments")
@PreAuthorize("hasRole('ADMIN')")
public interface DeparmentsRepository extends PagingAndSortingRepository<Deparment, Long> {

}