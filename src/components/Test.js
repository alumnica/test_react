import React, { useEffect } from "react";
import { connect } from "react-redux";
import LongQuestion from "./LongQuestion";
import ShortQuestion from "./ShortQuestion";
import { selectCardLongQuestion, lqFetchQuestion } from "../actions";

const Test = props => {
  const fetchLongQuestion = props.lqFetchQuestion;
  const id = 1;
  //NOTA: por que fechea la pregunta test y no longquestion
  useEffect(
    () => {
      fetchLongQuestion(id);
    },
    [fetchLongQuestion, id]
  );

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
  { lqFetchQuestion }
)(Test);
