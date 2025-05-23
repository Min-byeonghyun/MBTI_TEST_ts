import React from "react";
import styled from "styled-components";
import { Image, Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import KakaoShareButton from "../components/KakaoShareButton";
import { IResult } from "../stores/Result/types";
import { ResultData } from "../stores/Result/ResultData";

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
  padding: 20px 60px 20px 60px;
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
  margin-top: 50px;
`;
const BestDesc = styled.div`
  font-size: 25px;
  margin-top: 40px;
  color: #ffa07a;
`;
export default function ResultPage(): React.ReactElement {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti"); // 예비집사의 MBTI
  const TestResult: IResult = ResultData.find(
    (cat: IResult) => cat.best === mbti
  ) ?? {
    id: 0,
    name: "",
    best: "",
    mbti: "",
    desc: "",
    image: "",
  }; //잘 맞는 고양이
  const friendCat = ResultData.find(
    (friend) => friend.best === TestResult?.mbti
  ); //고양이와 잘맞는 고양이

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
              src={TestResult?.image}
            />
          </ResultImage>
          <Desc>
            {TestResult?.best}형 예비집사님과 찰떡궁합인 고양이는{" "}
            {TestResult?.mbti}형 고양이 {TestResult?.name}입니다.
          </Desc>
          <Desc>
            {TestResult?.name} 고양이는 {TestResult?.desc}
          </Desc>
          <BestDesc>
            나의 고양이와 잘맞는 형제묘로는 {friendCat?.name} 추천드려요.{" "}
          </BestDesc>
          <div style={{ marginBottom: "30px" }}>
            <Button
              onClick={() => navigate("/")}
              variant="outline-danger"
              style={{
                marginTop: "20px",
                marginRight: "20px",
                fontSize: "25px",
              }}
            >
              테스트 다시하기
            </Button>
            <KakaoShareButton data={TestResult} />
          </div>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}
