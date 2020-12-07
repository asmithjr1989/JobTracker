package com.codewithtony.JobTracker.Jobs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobResource {

  @Autowired private JobHardcodedService jobService;

  @GetMapping("/users/{username}/jobs")
  public List<Job> getAllJobs(@PathVariable String username) {

    return jobService.findAll();
  }
}
