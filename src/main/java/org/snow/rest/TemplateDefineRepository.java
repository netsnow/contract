package org.snow.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

@RepositoryRestResource(collectionResourceRel = "templatedefines", path = "/templatedefines")
@PreAuthorize("hasRole('ADMIN')")
public interface TemplateDefineRepository extends PagingAndSortingRepository<TemplateDefine, Long> {

}