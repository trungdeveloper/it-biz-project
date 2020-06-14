import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigateBar from './components/layout/navbar';
import TopHead from './components/layout/tophead';
import Footer from './components/layout/footer';
import styled from 'styled-components'; 

const Container = styled.div`
  margin-left: 100px;
  margin-right: 100px;
`
function App() {
  return (
    <>
      {/* <Container> */}
        <TopHead></TopHead>
        <NavigateBar></NavigateBar>
        <Footer></Footer>
      {/* </Container> */}
    </>
  );
}

export default App;