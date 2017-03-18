package org.snow.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "templatedefines", path = "/templatedefines")
public interface TemplateDefineRepository extends PagingAndSortingRepository<TemplateDefine, Long> {

}