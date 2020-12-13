package com.codewithtony.JobTracker.Jobs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JobResource {

  @Autowired private JobHardcodedService jobService;

  @GetMapping("/users/{username}/jobs")
  public List<Job> getAllJobs(@PathVariable String username) {

    return jobService.findAll();
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
}
