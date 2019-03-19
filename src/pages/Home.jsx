import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <AppHeader/>
        <p>home</p>
        <Link to={'/css'}>CSS Playground</Link>
        <Link to={'/css2'}>CSS Playground2</Link>
        <Link to={'/counter'}>Counter</Link>
        <Link to={'/flex'}>Flex</Link>
        <Link to={'/reacttransitiongroup'}>Transition</Link>
        <Link to={'/apollo'}>Apollo</Link>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  height: 80vh;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  background: #ffffff;
  vertical-align: center;
  border: 1px solid black;
`;
export default Home;
