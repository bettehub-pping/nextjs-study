import React from 'react';
import Layout from '../src/components/layout/Layout';

// 개념이 page이고, 규칙상 클래스 처럼 대문자 표기하기가 좀 난해해서 class 생성과 동시에 export 했습니다.
export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    return {
      userAgent,
      from: req ? '서버' : '클라이언트',
    };
  }

  render() {
    // console.log(this.props);
    return (
      <Layout>
        <div className="header">
          <h1>Home</h1>
        </div>
        <div className="content">
          <h2 className="content-subhead">UserAgent</h2>
          <p>{this.props.userAgent}</p>
          <h2 className="content-subhead">이 페이지는 어디서 왔을까요?</h2>
          <p>이 페이지는 <strong>{this.props.from}</strong>에서 실행되었습니다.</p>
        </div>
      </Layout>
    );
  }
}
// export default () => (<Layout page={Index}/>);
// export default () => (<Layout content={Index}/>);
