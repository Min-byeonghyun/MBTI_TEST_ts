import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
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
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("total", totalScore[0].score);
  }, [totalScore[0].score]);

  const handleClickAnswer = (ans: number, type: string) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + ans } : s
    );
    setTotalScore(newScore);
    // 마지막 문제가 아닐경우
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
      //마지막 문제일 경우
    } else {
      navigate("/result");
    }
  };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentsWrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            variant="outline-success"
            style={{
              marginRight: "20px",
              width: "45%",
              minHeight: "200px",
              fontSize: "15px",
            }}
            onClick={() => handleClickAnswer(1, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answera}
          </Button>
          <Button
            variant="outline-success"
            style={{ width: "45%", minHeight: "200px", fontSize: "15px" }}
            onClick={() => handleClickAnswer(0, QuestionData[questionNo].type)}
          >
            {QuestionData[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Wrapper>
  );
}
