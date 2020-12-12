import React, { Component } from 'react';
import './App.css';
import Container from './Component/container';
import HeaderApp from './Component/header'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
     <>
      <Layout className="App">
         <Header><HeaderApp/></Header>
         <Content><Container/></Content>
         <Footer>Footer</Footer>
       </Layout>
   </>
  );
}

export default App;
