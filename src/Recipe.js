import React from 'react';

import { Card, Image, Icon } from 'semantic-ui-react';

const Recipe = ({ Titles, Cuisine }) => {
  return (
    <Card>
      <Image src='/logo512.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Tets</Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>
          Daniel is a comedian living in Nashville.
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a>
          <Icon name='user' />
        10 Friends
      </a>
      </Card.Content>
    </Card>
  );
}

export default Recipe;