import React from "react";
import "./info.scss";
import Sidebar from "../../components/sidebar/sidebar";
import { Formik, Field, Form } from "formik";
import { InfoFormValidation } from "./info.validation";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log(JSON.stringify(values, null, 2));
    navigate("/plan");
  };
  return (
    <div className="info-container">
      <div className="info-card">
        <Sidebar selectedTab="info" />
        <div className="info-content">
          <div className="info-header-wrapper">
            <div className="info-header">Personal info</div>
            <div className="info-desc">
              Please provide your name, email address, and phone number
            </div>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "",
            }}
            validationSchema={InfoFormValidation}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {({ errors, touched }) => (
              <Form className="info-form">
                <div className="info-form-data">
                  <div className="info-field">
                    <label htmlFor="name">Name</label>
                    <Field name="name" placeholder="Vanessa Mint" />
                    {errors.name && touched.name ? (
                      <div className="form-error">{errors.name}</div>
                    ) : null}
                  </div>

                  <div className="info-field">
                    <label htmlFor="email">Email Address</label>
                    <Field
                      name="email"
                      placeholder="jane@acme.com"
                      type="email"
                    />
                    {errors.email && touched.email ? (
                      <div className="form-error">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="info-field">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field
                      name="phoneNumber"
                      placeholder="e.g. + 1 234 567 890"
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <div className="form-error">{errors.phoneNumber}</div>
                    ) : null}
                  </div>
                </div>
                <button className="submit-button" type="submit">
                  Next Step
                </button>
                <button
                  className="go-back-button"
                  type="button"
                  onClick={() => navigate(-1)}
                >
                  Go Back
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Info;
