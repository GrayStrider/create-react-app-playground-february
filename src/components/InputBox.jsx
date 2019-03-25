import React, { Component } from 'react';
import styled from 'styled-components';
import DefaultWrapper from './Helpers/DefaultWrapper';
import theme from '../utils/themes/default';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';

const spacing = theme.spacing;

class InputBox extends Component {
  // constructor(props){
  //   super(props)
  //   this.addTodo = this.props.addTodo.bind(this);
  // }
  //
  //
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   addTodo(document.getElementById('todo_input').value);
  // }

  render() {
    let input;
    const handleSubmit = (e) => {
      e.preventDefault();

      //================================================================================
      // validation
      if (!input.value.trim()) {
        input.value = '';
        return;
      }
      //================================================================================


      this.props.addTodo(input.value);
      input.value = '';
    };
    return (
      <Wrapper as='form' autoComplete="off" onSubmit={handleSubmit}>
        <input id='todo_input' type='text' placeholder='Add new task here' ref={node => {
          input = node;
        }}/>
        <input type='submit' value='Add'/>
      </Wrapper>
    );
  }
}


const Wrapper = styled(DefaultWrapper)`

  * {
     height: 30px;
  }

  & input[type='text'] {
    border: solid thin #d1d1d1;
    padding: ${spacing};
    box-shadow: 3px 3px 30px #e2e2e2;
    flex: auto;
  }
  
  & input[type='submit'] {
    margin-left: ${spacing};
  }
`;

// const mapStateToProps = state => ({
//   // count: state.count,
// });

const mapDispatchToProps = dispatch => ({
  addTodo: (content) => dispatch(addTodo(content)),
});

export default connect(null, mapDispatchToProps)(InputBox);
