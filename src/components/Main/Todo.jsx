import React, { Component } from 'react';
import styled from 'styled-components';
import InputBox from '../InputBox';
import DefaultWrapper from '../DefaultWrapper';
import theme from '../../utils/themes/default';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Task from '../Task';
import TaskDetails from '../TaskDetails';
import axios from 'axios';
import { addData } from '../../actions/todo';

const spacing = theme.spacing;
const loremIpsum = require('lorem-ipsum');


class Todo extends Component {
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 10000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch('http://localhost:3001/api/getData?name=Ivan')
      .then(data => data.json())
      .then(res => {
        console.log(res.data)
        this.props.addData(res.data)
      });
  };

  putDataToDB = message => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message,
    });
  };


  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(dat => {
      if (dat.id === idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:3001/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };


  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(dat => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  render() {
    const { data } = this.state;
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
          <DefaultWrapper>
            <div>
              <ul>
                {data.length <= 0
                  ? 'NO DB ENTRIES YET'
                  : data.map(dat => (
                    <li style={{ padding: '10px' }} key={data.message}>
                      <span style={{ color: 'gray' }}> id: </span> {dat.id} <br/>
                      <span style={{ color: 'gray' }}> data: </span>
                      {dat.message}
                    </li>
                  ))}
              </ul>
              <div style={{ padding: '10px' }}>
                <input
                  type='text'
                  onChange={e => this.setState({ message: e.target.value })}
                  placeholder='add something in the database'
                  style={{ width: '200px' }}
                />
                <button onClick={() => this.putDataToDB(this.state.message)}>
                  ADD
                </button>
              </div>
              <div style={{ padding: '10px' }}>
                <input
                  type='text'
                  style={{ width: '200px' }}
                  onChange={e => this.setState({ idToDelete: e.target.value })}
                  placeholder='put id of item to delete here'
                />
                <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
                  DELETE
                </button>
              </div>
              <div style={{ padding: '10px' }}>
                <input
                  type='text'
                  style={{ width: '200px' }}
                  onChange={e => this.setState({ idToUpdate: e.target.value })}
                  placeholder='id of item to update here'
                />
                <input
                  type='text'
                  style={{ width: '200px' }}
                  onChange={e => this.setState({ updateToApply: e.target.value })}
                  placeholder='put new value of the item here'
                />
                <button
                  onClick={() =>
                    this.updateDB(this.state.idToUpdate, this.state.updateToApply)
                  }
                >
                  UPDATE
                </button>
              </div>
            </div>
            <button onClick={this.getDataFromDb}>Get</button>
          </DefaultWrapper>
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

const mapDispatchToProps = dispatch => ({
  addData: (data) => dispatch(addData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
