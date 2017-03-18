package org.snow.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "templates", path = "/templates")
public interface TemplateRepository extends PagingAndSortingRepository<Template, Long> {

}