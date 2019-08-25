import React from 'react';
import { Button, Container, Grid, Header, Icon, Input, Label, Segment, Table } from 'semantic-ui-react';
// ---imports

function SemanticPlayground(props) {
  return (
    <Container fluid style={{ padding: '14px' }}>
      {/*--- Explanation N1*/}
      <Grid columns='equal' divided='vertically'>
        <Grid.Row>

          <Grid.Column>
            <Segment attached>
              <Header as='h1' content='Header'/>
              <Button content='Button'/>
            </Segment>
            <Header attached='bottom'>
              Attached Header
              <Label color='red' horizontal>tomorrow</Label>
              <Icon name='question' fitted outline style={{ float: 'right' }}/>
            </Header>
          </Grid.Column>

          <Grid.Column>
            <Segment basic>
              <Button content='Second Button'/>
              <Label attached='top right'>
                <Icon name='mail'/> 10
              </Label>
            </Segment>
          </Grid.Column>

        </Grid.Row>
        <Grid.Row>

          <Header as='h2' icon textAlign='center'>
            Table
            <Header.Subheader>Subheader</Header.Subheader>
          </Header>
          <Table definition unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell/>
                <Table.HeaderCell>Arguments</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>reset rating</Table.Cell>
                <Table.Cell>None</Table.Cell>
                <Table.Cell>Resets rating to default value</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>set rating</Table.Cell>
                <Table.Cell>rating (integer)</Table.Cell>
                <Table.Cell>Sets the current star rating to specified value</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>

        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Input placeholder='Input placeholder...' icon='search' iconPosition='right'/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </Container>
  );
}

export default SemanticPlayground;
