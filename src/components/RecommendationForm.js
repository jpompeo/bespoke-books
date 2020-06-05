import React from "react";
import { Field, reduxForm } from "redux-form";
import Multiselect from "react-widgets/lib/Multiselect";
import { connect } from "react-redux";
import { sendRecommendation } from "../actions/index";
import { storeRecommendation } from "../actions/index";
import { bindActionCreators } from "redux";
import { getFormValues } from "redux-form";

import "../css/RecommendationForm.css";
import "react-widgets/dist/css/react-widgets.css";

const renderMultiselect = ({ input, data, valueField, textField }) => {
  return (
    <Multiselect
      {...input}
      onBlur={() => input.onBlur()}
      value={input.value || []} // requires value to be an array
      data={data}
      valueField={valueField}
      textField={textField}
    />
  );
};

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

  const onSubmit = (values) => {
    props.storeRecommendation(props.formStates, props.id, props.image);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit.bind(this))}>
        <Field
          label="Why do you recommend this book?"
          name="text"
          component={renderField}
        />
        <Field label="Your name" name="user" component={renderField} />

        <div>
          <label>tags</label>
          <Field name="tags" component={renderMultiselect} data={props.tags} />
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

function mapStateToProps(state) {
  if (state.book[0]) {
    return {
      id: state.book[0].id,
      image: state.book[0].volumeInfo.imageLinks.thumbnail,
      tags: state.tags,
      formStates: getFormValues("RecommendationForm")(state),
    };
  } else {
    return {
      tags: state.tags,
    };
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { sendRecommendation, storeRecommendation },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendationForm);
