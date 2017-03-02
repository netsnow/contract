package org.snow.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(collectionResourceRel = "reports", path = "/reports")
@PreAuthorize("hasRole('ADMIN')")
public interface ReportRepository extends PagingAndSortingRepository<Report, Long> {

}
