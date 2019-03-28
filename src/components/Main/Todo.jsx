import React, { Component } from 'react';
import styled from 'styled-components';
import InputBox from '../InputBox';
import DefaultWrapper from '../Helpers/DefaultWrapper';
import theme from '../../utils/themes/default';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Task from '../Task';
import TaskDetails from '../TaskDetails';
import ApolloPlayground from '../ApolloQuery';
import ApolloFetch from '../ApolloFetch';

const spacing = theme.spacing;
const loremIpsum = require('lorem-ipsum');


class Todo extends Component {
  render() {
    return (
      <Wrapper>

        <ColumnLeft>
          <Block><Link to='/home'>Home</Link></Block>
          <Block>{loremIpsum({ count: 5 })}</Block>
          <Block>{loremIpsum({ count: 10 })}</Block>
        </ColumnLeft>

        <ColumnCenter>
          <InputBox/>
          <TaskList>
            {this.props.tasks
              .filter(task => !task.isDeleted)
              .map(task => (
                  <Task key={task.id}
                        id={task.id}
                        content={task.content}
                        completed={task.completed}
                  />
                ),
              )}
          </TaskList>
          <Deleted>
            {this.props.tasks
              .filter(task => task.isDeleted)
              .map(task => (
                  <Task key={task.id}
                        id={task.id}
                        content={task.content}
                        completed={task.completed}
                  />
                ),
              )}
          </Deleted>
        </ColumnCenter>

        <ColumnRight>
          <TaskDetails/>
          <ApolloPlayground/>
          <ApolloFetch/>
        </ColumnRight>

      </Wrapper>
    );
  }
}


const TaskList = styled(DefaultWrapper)`
  border-radius: 0;
  display: flex;
  flex-direction: column;
  
  &:empty {
    display: none;
  }
`;

const Deleted = styled(TaskList)`
  //margin-top: auto;
`;

const Block = styled(DefaultWrapper)`

`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${spacing} 0 ${spacing};
  flex: 1;
  //height: 100%;

`;
const ColumnLeft = styled(Column)`
  min-width: 30%;
  max-width: 40%;

`;

const ColumnCenter = styled(Column)`

`;

const ColumnRight = styled(Column)`

`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-items: stretch;

  background: #ddd;
  position: absolute;
  height: 100%;
  width: 100%;
  padding: ${spacing};
  
  overflow: auto;
  
  @media(max-width: 800px) {
    & ${ColumnLeft} {
      display: none;
    }
  }
  
  @media(max-width: 700px) {
    & ${ColumnRight} {
      display: none;
    }
    
  }
`;

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, null)(Todo);
