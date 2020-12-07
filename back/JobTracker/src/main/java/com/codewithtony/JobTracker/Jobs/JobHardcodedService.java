package com.codewithtony.JobTracker.Jobs;


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
            "www.apple.com",
            "following",
            new Date(),
            "you can do it "));

    jobs.add(
            new Job(
                    ++idCounter,
                    "asmithjr",
                    "Game Developer",
                    "www.playsation.com",
                    "following",
                    new Date(),
                    "you can do it "));

    jobs.add(
            new Job(
                    ++idCounter,
                    "asmithjr",
                    "Author",
                    "www.BN.com",
                    "following",
                    new Date(),
                    "you can do it "));
  }

  public List<Job> findAll(){
    return jobs;
  }
}
