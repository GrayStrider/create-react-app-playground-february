import React, { Component } from 'react';
import styled from 'styled-components';
import DefaultWrapper from './Helpers/DefaultWrapper';
import gql from 'graphql-tag';

const GET_USERS = gql`
    {
        users {
            _id
            email
            name
        }
    }
`

class ApolloPlayground extends Component {
  render() {
    return (
      <Wrapper>
        <p>Apollo</p>

      </Wrapper>
    );
  }
}

const Wrapper = styled(DefaultWrapper)`
  
`;

export default ApolloPlayground;
