// 참고: https://selosele.github.io/2020/11/23/nodejs-create-webserver/
// CORS 관련: https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#cors_%EC%97%90%EB%9F%AC_%ED%95%9C%EB%B0%A9_%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0
// 기본 설정
const express = require("express");
const cors = require("cors"); // cors 설정을 편안하게 하는 패키지
const app = express();
const PORT = 3000;

app.use(cors({
    origin: [
      "http://localhost:3000"
    ],  // 접근 권한을 부여하는 도메인
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  }));

// 정적 파일 불러오기
app.use(express.static(__dirname + "/public"));

// 라우팅 정의
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Listen : ${PORT}`);
});