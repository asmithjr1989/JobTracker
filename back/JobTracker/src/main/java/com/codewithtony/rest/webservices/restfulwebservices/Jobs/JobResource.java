package com.codewithtony.rest.JobTracker.restfulwebservices.Jobs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JobResource {

  @Autowired private JobHardcodedService jobService;

  @GetMapping("/users/{username}/jobs")
  public List<Job> getAllJobs(@PathVariable String username) {

    return jobService.findAll();
  }

  @GetMapping("/users/{username}/jobs/{id}")
  public Job getJob(@PathVariable String username, @PathVariable long id) {

    return jobService.findById(id);
  }

  // DELETE /users/{username}/todos/{id}
  @DeleteMapping("/users/{username}/jobs/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
    Job job = jobService.deleteById(id);
    if (job != null) {
      System.out.println("not content");
      return ResponseEntity.noContent().build();
    } else {
      System.out.println("not found");
      return ResponseEntity.notFound().build();
    }
  }

  // Edit
  // Put  /user/{user_name}/jobs/{job_id}
  @PutMapping("/users/{username}/jobs/{id}")
  public ResponseEntity<Job> updateJob(
      @PathVariable String username, @PathVariable long id, @RequestBody Job job) {

    Job jobUpdated = jobService.save(job);

    return new ResponseEntity<Job>(job, HttpStatus.OK);
  }

  // Create a new Job
  // Post /users/{user_name}/jobs/
  @PostMapping("/users/{username}/jobs/")
  public ResponseEntity<Void> updateJob(
          @PathVariable String username, @RequestBody Job job) {

    Job createdJob = jobService.save(job);

    //Location
    //Get current resource URL
    //{id}
   URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdJob.getId()).toUri();

    return ResponseEntity.created(uri).build();
  }

}
