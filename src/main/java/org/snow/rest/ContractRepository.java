package org.snow.rest;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "contracts", path = "/contracts")
public interface ContractRepository extends PagingAndSortingRepository<Contract, Long> {
    @Query("select u from Contract u where u.creatorname = ?1 and u.enabled = 1")
    List<Contract> findByCreatorname(@Param("name") String name);

}