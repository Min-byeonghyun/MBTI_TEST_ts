import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import { QuestionData } from "../stores/Question/QuestionData";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fffacd;
  font-family: "Jalnan";
`;

const ContentsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;

  button {
    font-size: 20px;
  }
`;

export default function QuestionPage(): React.ReactElement {
  const [questionNo, setQuestionNo] = useState(0);

  const handleClickAnswer = () => {
    setQuestionNo(questionNo + 1);
  };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo}/>
      <ContentsWrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            variant="outline-success"
            style={{ marginRight: "20px" }}
            onClick={handleClickAnswer}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button variant="outline-success">
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Wrapper>
  );
}
