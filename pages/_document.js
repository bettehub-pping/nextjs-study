import Document, { Head, Main, NextScript } from 'next/document';
export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="ko">
        <Head>
          {/* 공통 부분, 컴포넌트 별로 Head 설정도 가능  */}
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="keywords" content="행복쇼핑, 행복, 쇼핑, 컴퓨터, PC, 조립PC, 조립컴퓨터, 노트북, 태블릿, 상품 추천, 가격비교, 가격비교사이트, 가격비교 싸이트, 가격 검색, 최저가, 추천, 인터넷쇼핑, 온라인쇼핑, 쇼핑, 쇼핑몰, 싸게 파는 곳, 싸게 살 수 있는 곳"/>
          <meta name="description" content="행복쇼핑은 컴퓨터, 조립PC에 특화된 온라인 견적 가격비교 사이트 입니다. 안전구매시스템(전자보증,에스크로)을 갖춘 쇼핑몰, 미니샵의 최저 가격 정보를 보여드립니다. 쇼핑의 행복! 행복쇼핑"/>
          <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"
            integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w"
            crossOrigin="anonymous"/>
        </Head>
        <body>
          <Main/> {/* 각각 라우트에 해당하는 페이지가 렌더링 되는 부분 */}
          <NextScript/> {/* Next.js 관련한 자바스크립트 파일 */}
        </body>
      </html>
    );
  }
}
