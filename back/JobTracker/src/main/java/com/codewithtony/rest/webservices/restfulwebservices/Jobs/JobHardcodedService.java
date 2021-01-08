package com.codewithtony.rest.webservices.restfulwebservices.Jobs;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class JobHardcodedService {

  private static List<Job> jobs = new ArrayList<>();
  private static int idCounter = 0;

  static {
    jobs.add(
        new Job(
            ++idCounter,
            "asmithjr",
            "Software Engineer",
            "Apple",
            "www.apple.com",
            "following",
            new Date(),
            "you can do it "));

    jobs.add(
        new Job(
            ++idCounter,
            "asmithjr",
            "Game Developer",
            "Square",
            "www.playsation.com",
            "following",
            new Date(),
            "you can do it "));

    jobs.add(
        new Job(
            ++idCounter,
            "asmithjr",
            "Author",
            "self-published",
            "www.BN.com",
            "following",
            new Date(),
            "you can do it "));
  }

  public List<Job> findAll() {
    return jobs;
  }


  public  Job save(Job job){
    if(job.getId() == -1 || job.getId()==0l){
      job.setId(++idCounter);
      jobs.add(job);
    }else{
      deleteById(job.getId());
      jobs.add(job);
    }
    return job;
  }

  public Job deleteById(Long id) {
    Job job = findById(id);

    if (job == null) return null;

    if (jobs.remove(job)){
      return job;
    }

    return null;
  }

  public Job findById(Long id) {
    for (Job job:jobs) {
      if (job.getId() == id) {
        return job;
      }
    }
    return null;
  }


}
