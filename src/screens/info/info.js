import React from "react";
import "./info.scss";
import Sidebar from "../../components/sidebar/sidebar";
import { Formik, Field, Form } from "formik";

const Info = () => {
  const handleFormSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <div className="container">
      <div className="card">
        <Sidebar />
        <div className="content">
          <div className="header-wrapper">
            <div className="info-header">Personal info</div>
            <div className="info-desc">
              Please provide your name, email address, and phone number
            </div>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
            }}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            <Form className="info-form">
              <div className="info-form-data">
                <div className="info-field">
                  <label htmlFor="firstName">Name</label>
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="Vanessa Mint"
                  />
                </div>

                <div className="info-field">
                  <label htmlFor="email">Email Address</label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                  />
                </div>
                <div className="info-field">
                  <label htmlFor="firstName">Phone Number</label>
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="e.g. + 1 234 567 890"
                  />
                </div>
              </div>
              <button className="submit-button" type="submit">
                Next Step
              </button>
              <button className="go-back-button" type="button">
                Go Back
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Info;
