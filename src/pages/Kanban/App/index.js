import React from 'react';
import styled from 'styled-components'
import Header from './Header/_Header';
import Footer from './Footer/Footer';
import Board from './Board/Board';


const Wrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  
  background: #505050;
`

function Kanban(props) {
  return (
    <Wrapper>
      <Header/>
      <Board/>
      <Footer/>
    </Wrapper>
  );
}

export default Kanban;
