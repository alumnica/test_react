import React from "react";
import { connect } from "react-redux";
import LongQuestion from "./LongQuestion";
import ShortQuestion from "./ShortQuestion";

const Test = props => {
  const renderQuestions = () => {
    if (props.result.length === 4) {
      return <ShortQuestion />;
    } else {
      return <LongQuestion />;
    }
  };

  return (
    <>
      <h1 className="ui header">Test</h1>
      {renderQuestions()}
    </>
  );
};
const mapStateToProps = state => {
  return { result: state.test.longQuestion.result };
};
export default connect(
  mapStateToProps,
  {}
)(Test);
