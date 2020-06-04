import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Multiselect from "react-widgets/lib/Multiselect";
import { addRecommendation } from "../actions";
import "../css/RecommendationForm.css";

const renderMultiselect = ({ input, data, valueField, textField }) => (
  <Multiselect
    {...input}
    onBlur={() => input.onBlur()}
    value={input.value || []} // requires value to be an array
    data={data}
    valueField={valueField}
    textField={textField}
  />
);

const RecommendationForm = (props) => {
  const renderField = (field) => {
    const {
      meta: { touched, error },
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  };

  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          label="Why you recommend this book"
          name="text"
          component={renderField}
        />
        <Field label="Your name" name="user" component={renderField} />

        <div>
          <label>Hobbies</label>
          <Field
            name="hobbies"
            component={renderMultiselect}
            data={["Guitar", "Cycling", "Hiking"]}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.text) {
    errors.text = "Enter a recommendation";
  }
  if (!values.user) {
    errors.user = "Enter a user name";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

const newRecommendationForm = reduxForm({
  validate,
  form: "RecommendationForm",
})(RecommendationForm);

export default RecommendationForm;
