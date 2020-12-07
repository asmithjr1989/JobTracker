package com.codewithtony.JobTracker.Jobs;

import java.util.Date;

public class Job {

    private long id;
    private String username;
    private String jobTitle;
    private String webLink;
    private String status;
    private Date appliedDate;
    private String notes;

    public Job() {
    }

    public Job(long id, String username, String jobTitle, String webLink, String status, Date appliedDate, String notes) {
        this.id = id;
        this.username = username;
        this.jobTitle = jobTitle;
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

    @Override
    public String toString() {
        return "Jobs{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", jobTitle='" + jobTitle + '\'' +
                ", webLink='" + webLink + '\'' +
                ", status='" + status + '\'' +
                ", appliedDate=" + appliedDate +
                ", notes='" + notes + '\'' +
                '}';
    }
}
