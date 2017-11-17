import React from 'react';
import Layout from '../src/components/layout/Layout';
import Query from '../src/components/query/Query';

const Post = ({title}) => (
  <div>
    <div className="header">
      <h1>{title} - Query</h1>
    </div>
    <div className="content">
      <Query/>
    </div>
  </div>
);

export default (props) => (
  <Layout>
    <Post title={props.url.query.title}/>
  </Layout>
);
