import React, { Component } from "react";
import moment from "moment";
import { Field, Form, Formik } from "formik";

class JobComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      jobTitle: "Super_Hero",
      company: "UA",
      webLink: "UA.com",
      status: "interviewed",
      appliedDate: moment(new Date()).format("YYYY-MM-DD"),
      notes: "go beyond",
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this. validate.bind(this)
  }

  validate(values){
      let errors = {
      }
      console.log(values);
  }

  onSubmit(values){
      console.log(values)
  }
  render() {

    let {jobTitle,company,webLink,status,appliedDate, notes} = this.state


    return (
      <div>
        <h1>Jobs</h1>
        <div className="container">
          <Formik
            initialValues={{jobTitle,company,webLink,status,appliedDate,notes
            }}
            onSubmit={this.onSubmit}
            validate={this.validate}
          >
            {(props) => (
              <Form>
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
