import React, { Component } from 'react';
import styled from 'styled-components';
import DefaultWrapper from './Helpers/DefaultWrapper';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_USERS = gql`
    {
        users {
            _id
            email
            name
        }
    }
`;

class ApolloPlayground extends Component {
  users;
  render() {
    return (
      <Wrapper>
        <Query query={GET_USERS}>
          {({ loading, error, data, refetch }) => {
            if (loading) return 'Loading....';
            if (error) return `Error! ${error.message}`;

            return (
              <>
                <ul>{data.users.map(user =>
                  <li key={user._id}>{user.name} --- {user.email}</li>
                )}
                </ul>

                <button onClick={() => refetch()}>
                  Refresh
                </button>
              </>
            );
          }}
        </Query>

      </Wrapper>
    );
  }
}

const Wrapper = styled(DefaultWrapper)`
  & {
    display: inline;
  }

`;

export default ApolloPlayground;
