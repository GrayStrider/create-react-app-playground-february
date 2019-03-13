import React, { Component } from 'react';
import styled from 'styled-components';
import InputBox from './components/InputBox';
import DefaultWrapper from './components/DefaultWrapper';
import theme from './themes/default';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const spacing = theme.spacing;
const loremIpsum = require('lorem-ipsum');


class Todo2 extends Component {
  render() {
    return (
      <Wrapper>

        <ColumnLeft>
          <Block><Link to='/home'>Home</Link></Block>
          <Block>{loremIpsum({count: 5})}</Block>
          <Block>{loremIpsum({count: 10})}</Block>
        </ColumnLeft>

        <ColumnCenter>
          <InputBox/>
          <TaskList>
            <p>task</p>
          </TaskList>
        </ColumnCenter>

        <ColumnRight>
          <Block>{loremIpsum({count: 5})}</Block>
          <Block>{loremIpsum({count: 40})}</Block>
        </ColumnRight>

      </Wrapper>
    );
  }
}


const Task = styled.div`

`

const TaskList = styled(DefaultWrapper)`
  border-radius: 0;
`

const Block = styled(DefaultWrapper)`

`

const Column = styled.div`
  padding: 0 ${spacing} 0 ${spacing};

`
const ColumnLeft = styled(Column)`
  min-width: 30%;
  max-width: 40%;

`

const ColumnCenter = styled(Column)`

`

const ColumnRight = styled(Column)`

`
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  background: #ddd;
  position: absolute;
  height: 100%;
  padding: 0 ${spacing} 0 ${spacing};
  
  overflow: auto;
  
  @media(max-width: 1000px) {
    & ${ColumnLeft} {
      display: none;
    }
  }
  
  @media(max-width: 730px) {
    & ${ColumnRight} {
      display: none;
    }
  }
`

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = dispatch => ({
  // setCounter: (value) => dispatch(setCounter(value)),
});

export default connect(mapStateToProps, /*mapDispatchToProps*/ null)(Todo2);
