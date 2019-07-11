import React from "react";
import { connect } from "react-redux";
import LongQuestion from "./LongQuestion";
import ShortQuestion from "./ShortQuestion";

const Test = props => {
  const renderQuestions = () => {
    if (props.status.isLoading) {
      return <div>Loading...</div>;
    }
    if (props.status.longQuestion) {
      return <LongQuestion />;
    }
    if (props.status.shortQuestion) {
      return <ShortQuestion />;
    }
    if (props.status.result) {
      return <div>Resultado</div>;
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
  return { status: state.test.status };
};
export default connect(
  mapStateToProps,
  {}
)(Test);
