package com.codewithtony.rest.webservices.restfulwebservices.Jobs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JobJpaResource {

  @Autowired private JobHardcodedService jobService;

  @Autowired private JobJpaRepository jobJpaRepository;

  @GetMapping("/jpa/users/{username}/jobs")
  public List<Job> getAllJobs(@PathVariable String username) {
    return jobJpaRepository.findByUsername(username);
    // return jobService.findAll();
  }

  @GetMapping("/jpa/users/{username}/jobs/{id}")
  public Job getJob(@PathVariable String username, @PathVariable long id) {
    return jobJpaRepository.findById(id).get();
    // return jobService.findById(id);
  }

  @DeleteMapping("/jpa/users/{username}/jobs/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {

    jobJpaRepository.deleteById(id);
    return ResponseEntity.noContent().build();
  }

  @PutMapping("/jpa/users/{username}/jobs/{id}")
  public ResponseEntity<Job> updateJob(
      @PathVariable String username, @PathVariable long id, @RequestBody Job job) {

    job.setUsername(username);
    Job jobUpdated = jobJpaRepository.save(job);


    return new ResponseEntity<Job>(job, HttpStatus.OK);
  }

  @PostMapping("/jpa/users/{username}/jobs/")
  public ResponseEntity<Void> createJob(@PathVariable String username, @RequestBody Job job) {

    job.setUsername(username);

    Job createdJob = jobService.save(job);

    URI uri =
        ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(createdJob.getId())
            .toUri();


    return ResponseEntity.created(uri).build();
  }
}
