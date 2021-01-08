package com.codewithtony.rest.webservices.restfulwebservices.Jobs;

import java.util.Date;
import java.util.Objects;

public class Job {

    private long id;
    private String username;
    private String jobTitle;
    private String company;
    private String webLink;
    private String status;
    private Date appliedDate;
    private String notes;

    public Job() {
    }

    public Job(long id, String username, String jobTitle, String company, String webLink, String status, Date appliedDate, String notes) {
        this.id = id;
        this.username = username;
        this.jobTitle = jobTitle;
        this.company = company;
        this.webLink = webLink;
        this.status = status;
        this.appliedDate = appliedDate;
        this.notes = notes;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getWebLink() {
        return webLink;
    }

    public void setWebLink(String webLink) {
        this.webLink = webLink;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getAppliedDate() {
        return appliedDate;
    }

    public void setAppliedDate(Date appliedDate) {
        this.appliedDate = appliedDate;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    @Override
    public String toString() {
        return "Job{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", company='" + company + '\'' +
                ", webLink='" + webLink + '\'' +
                ", status='" + status + '\'' +
                ", appliedDate=" + appliedDate +
                ", notes='" + notes + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Job job = (Job) o;
        return id == job.id && Objects.equals(username, job.username) && Objects.equals(jobTitle, job.jobTitle) && Objects.equals(company, job.company) && Objects.equals(webLink, job.webLink) && Objects.equals(status, job.status) && Objects.equals(appliedDate, job.appliedDate) && Objects.equals(notes, job.notes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, jobTitle, company, webLink, status, appliedDate, notes);
    }
}
