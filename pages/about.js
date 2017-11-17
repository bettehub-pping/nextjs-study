import React from 'react';
import Layout from '../src/components/layout/Layout';
import Query from '../src/components/query/Query';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

    return {
      userAgent,
      from: req ? '서버' : '클라이언트',
    };
  }

  render() {
    return (
      <Layout>
        <div className="header">
          <h1>About</h1>
        </div>
        <div className="content">
          <h2 className="content-subhead">UserAgent</h2>
          <p>{this.props.userAgent}</p>
          <h2 className="content-subhead">이 페이지는 어디서 왔을까요?</h2>
          <p>이 페이지는 <strong>{this.props.from}</strong>에서 실행되었습니다.</p>
          <Query/>
        </div>
      </Layout>
    );
  }
}
