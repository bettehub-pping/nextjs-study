import React from 'react';
import Head from 'next/head';
import Meta from './Meta.js';
import Nav from './Nav';
import Footer from './Footer.js';
import LayoutCSS from '../../../assets/css-jsx/layout/LayoutCSS';

const Layout = ({children}) => (
  <div>
    <Head>
      <Meta/>
      <LayoutCSS/>
    </Head>
    <div id="layout">
      <Nav/>
      <div id="main">
      {children}
      </div>
      <Footer/>
    </div>
  </div>
);

export default Layout;
