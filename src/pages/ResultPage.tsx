import React from "react";
import styled from "styled-components";
import { Button, Image } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../stores/Result/ResultData";
import Header from "../components/Header";

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
  padding : 20px;
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
`;
const ResultImage = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 30px;
`;

export default function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  return (
    <>
      <Wrapper>
        <Header type="title" questionNo={0} />
        <ContentsWrapper>
          <Title>결과 보기</Title>
          <ResultImage>
            <Image
              className="rounded-circle"
              width={350}
              height={350}
              src={ResultData[0].image}
            />
            <Desc>예비집사님과 철떡궁합인 고양이는 {mbti}형 고양이 입니다.</Desc>
          </ResultImage>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}
