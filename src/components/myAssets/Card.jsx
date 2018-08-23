import React from 'react';
import styled from 'styled-components';
import { Card, Icon, Image } from 'semantic-ui-react';

const StyledCard = styled(Card)`
  height:250px;
  margin-top:1rem !important;
`

const CARD = ({body,title}) => (
  <StyledCard>
    {/* <Image src={thumbnailUrl} /> */}
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{body}</Card.Description>
    </Card.Content>
  </StyledCard>
)

export default CARD
