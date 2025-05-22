import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { IResult } from "../stores/Result/types";
const Kakao = (window as any).Kakao;

interface Props {
  data: IResult;
}

export default function KakaoShareButton(props: Props) {
  const url = "https://catmbtimb.netlify.app/";
  const resultUrl = window.location.href;
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init("82b8cd77fa835d4795aa00c4099cdb3e");
    }
  }, []);
  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "😺 예비집사 판별기 결과😺",
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${props.data.name}입니다.`,
        imageUrl: url + props.data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: "나도 테스트하러 가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <>
      <Button
        onClick={shareKakao}
        variant="outline-warning"
        style={{ marginTop: "20px", fontSize: "25px", marginBottom: "40px"}}
      >
        공유하기
      </Button>
    </>
  );
}
