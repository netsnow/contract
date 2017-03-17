package org.snow.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "notices", path = "/notices")
public interface NoticeRepository extends PagingAndSortingRepository<Notice, Long> {

}
