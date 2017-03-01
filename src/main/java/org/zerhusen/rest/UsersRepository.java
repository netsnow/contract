package org.zerhusen.rest;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;
import org.zerhusen.model.security.User;

@RepositoryRestResource(collectionResourceRel = "users", path = "/users")
@PreAuthorize("hasRole('ADMIN')")
public interface UsersRepository extends PagingAndSortingRepository<User, Long> {

}