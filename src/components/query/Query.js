import React from 'react';
import Link from 'next/link';

const PostLink = ({id, title}) => (
  <li>
    <Link as={`/post/${id}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Query = (props) => (
  <div>
    <h2 className="content-subhead">Clean URLs with Route Masking</h2>
    <p>아래 링크는 쿼리를 날려 생성했고, url도 ?key=value가 아닌 방식으로 재구성 했습니다.<br/>
    이를 위해 커스텀 서버를 구성했습니다.</p>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </div>
);

export default Query;
