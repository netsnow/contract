package org.snow.rest;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.snow.model.security.User;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "users", path = "/users")
public interface UsersRepository extends PagingAndSortingRepository<User, Long> {
    List<User> findByUsername(@Param("name") String name);
}