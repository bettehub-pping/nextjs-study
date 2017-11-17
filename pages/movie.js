import React from 'react';
import Layout from '../src/components/layout/Layout';
import axios from 'axios';
import Link from 'next/link';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    const movies =
      await axios.get('https://yts.ag/api/v2/list_movies.json', {
        sort_by: 'rating',
      })
      .then(function (res) {
        // console.log(res.data.data);
        return res.data.data.movies;
      })
      .catch(function (err) {
        console.log(err);
      });

    return {
      userAgent,
      from: req ? '서버' : '클라이언트',
      movies
    };
  }

  render() {
    return (
      <Layout>
        <div className="header">
          <h1>Movie</h1>
        </div>
        <div className="content">
          <h2 className="content-subhead">UserAgent</h2>
          <p>{this.props.userAgent}</p>
          <h2 className="content-subhead">이 페이지는 어디서 왔을까요?</h2>
          <p>이 페이지는 <strong>{this.props.from}</strong>에서 실행되었습니다.</p>
          <ul>
            {this.props.movies.map(item => {
              return (
                <li key={item.yt_trailer_code}>
                  <dl>
                    <dd><img src={item.small_cover_image} alt={item.title}/></dd>
                    <dt><Link prefetch as={`/movies/${item.yt_trailer_code}`} href={`/movies?${item.title}`}>
                      <a>{item.title}</a>
                    </Link></dt>
                    <dd>{item.summary}</dd>
                  </dl>
                </li>
              );
            })}
          </ul>
        </div>
      </Layout>
    );
  }
}
// export default () => (<Layout page={Index}/>);
// export default () => (<Layout content={Index}/>);
