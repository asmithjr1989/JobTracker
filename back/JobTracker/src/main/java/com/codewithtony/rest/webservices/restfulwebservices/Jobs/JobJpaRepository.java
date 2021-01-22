package com.codewithtony.rest.webservices.restfulwebservices.Jobs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobJpaRepository extends JpaRepository<Job, Long> {
    List<Job> findByUsername(String username);
}
