import React, { Component } from 'react';
import styled from 'styled-components';
import DefaultWrapper from './Helpers/DefaultWrapper';
import { ApolloConsumer, Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';


const FilterLink = () => (
  <Wrapper>
    <ApolloConsumer>
      {client => (
        <button
          onClick={() => client.writeData({ data: { testData: 'test2' } })}
        >
          send data
        </button>
      )}
    </ApolloConsumer>
  </Wrapper>
);

const Wrapper = styled(DefaultWrapper)`
  
`;

export default FilterLink;
