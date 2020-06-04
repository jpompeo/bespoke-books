import React from "react";
import { Field, reduxForm } from "redux-form";
import Multiselect from "react-widgets/lib/Multiselect";

import "../css/RecommendationForm.css";

let state = {
  tagList: [
    "Adventure",
    "Belief",
    "Forgiveness",
    "Decisions",
    "Death & Dying",
    "Love",
    "Acceptance",
    "Courage",
    "Change",
    "Empathy",
    "Overcoming Adversity",
    "Pressure",
    "Friendship",
    "Sacrifice",
    "The Bonds of Family",
    "Suffering",
    "Conflict",
    "Abandonment",
    "Alienation",
    "Ambition",
    "Coming of Age",
    "Freedom",
    "Gender",
    "Justice",
    "Isolation",
    "Cruelty",
    "Fate",
    "Hope",
    "Guilt",
    "Black Lives Matter",
    "LGBTQ Pride",
  ],
};

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

let RecommendationForm = (props) => {
  // used later by redux-form in render
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
          label="Why do you recommend this book?"
          name="text"
          component={renderField}
        />
        <Field label="Your name" name="user" component={renderField} />

        <div>
          <label>tags</label>
          <Field
            name="tags"
            component={renderMultiselect}
            data={[...state.tagList]}
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
  if (!values.tags) {
    errors.tags = "Choose at least one tag";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

RecommendationForm = reduxForm({
  validate,
  form: "RecommendationForm",
})(RecommendationForm);

export default RecommendationForm;
