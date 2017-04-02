package org.snow.rest;

import org.snow.model.security.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.List;

@RepositoryRestResource(collectionResourceRel = "users", path = "/users")
public interface UsersRepository extends PagingAndSortingRepository<User, Long> {
    //@Query("select u from User u where u.username = ?1")
    List<User> findByUsername(@Param("name") String name);
}