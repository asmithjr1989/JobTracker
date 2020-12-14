import React, { Component } from "react";
import moment from "moment";
import { ErrorMessage, Field, Form, Formik } from "formik";
import JobsDataService from "../../api/job/JobsDataService.js";
import AuthenticationService from "./AuthenticationService.js";

class JobComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      jobTitle: "",
      company: "",
      webLink: "",
      status: "",
      appliedDate: moment(new Date()).format("YYYY-MM-DD"),
      notes: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    if (this.state.id === 1) {
      return;
    }

    let username = AuthenticationService.getLoggedInUserName();
    JobsDataService.retrieveJob(username, this.state.id).then((response) =>
      this.setState({
        jobTitle: response.data.jobTitle,
        company: response.data.company,
        webLink: response.data.webLink,
        status: response.data.status,
        appliedDate: moment(response.data.appliedDate).format("YYYY-MM-DD"),
        notes: response.data.notes,
      })
    );
  }

  validate(values) {
    let errors = {};
    if (!values.jobTitle) {
      errors.jobTitle = "Enter a Job Title";
    } else if (values.jobTitle.length < 2) {
      errors.jobTitle = "Enter at least 2 Characters in the Job Title";
    }

    if (!values.company) {
      errors.company = "Enter the name of the Company";
    } else if (values.company.length < 2) {
      errors.company = "Enter at least 2 characters for Company";
    }

    if (!values.webLink) {
      errors.webLink = "Enter in the link to the Job Posting";
    } else if (values.webLink.length < 5) {
      errors.webLink = "Enter at least 5 characters in for the Link";
    }

    if (!values.status) {
      errors.status = "Enter the status of the Job Listing";
    } else if (values.status.length < 2) {
      errors.status = "Enter at least 2 characters in the status";
    }

    if (!moment(values.appliedDate).isValid()) {
      errors.appliedDate = "Please enter a valid Date";
    }

    return errors;
  }

  onSubmit(values) {
    let username = AuthenticationService.getLoggedInUserName();

    let job = {
      id: this.state.id,
      jobTitle: values.jobTitle,
      company: values.company,
      webLink: values.webLink,
      status: values.status,
      appliedDate: values.appliedDate,
      notes: values.notes,
    };

    if (this.state.id === -1) {
      JobsDataService.createJob(username, job).then(() =>
        this.props.history.push("/jobs")
      );
    } else {
      JobsDataService.updateJob(username, this.state.id, job).then(() =>
        this.props.history.push("/jobs")
      );
      console.log(values);
    }
  }
  render() {
    let { jobTitle, company, webLink, status, appliedDate, notes } = this.state;

    return (
      <div>
        <h1>Jobs</h1>
        <div className="container">
          <Formik
            initialValues={{
              jobTitle,
              company,
              webLink,
              status,
              appliedDate,
              notes,
            }}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="jobTitle"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="appliedDate"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="company"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="webLink"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="status"
                  component="div"
                  className="alert alert-warning"
                />

                <fieldset className="form-group">
                  <label>Job Title</label>
                  <Field className="form-control" type="text" name="jobTitle" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Company</label>
                  <Field className="form-control" type="text" name="company" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Link</label>
                  <Field className="form-control" type="text" name="webLink" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Status</label>
                  <Field className="form-control" type="text" name="status" />
                </fieldset>
                <fieldset className="form-group">
                  <label> Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="appliedDate"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Notes</label>
                  <Field className="form-control" type="text" name="notes" />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default JobComponent;
