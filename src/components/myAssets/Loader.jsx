import React, {Fragment} from 'react';
import styled from 'styled-components';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const StyledDimmer = styled(Dimmer)`
  min-height:400px;
`

const LoaderExampleText = () => (
  <Fragment>
    <Segment>
      <StyledDimmer active inverted>
        <Loader inverted>Loading</Loader>
      </StyledDimmer>
    </Segment>
  </Fragment>
)

export default LoaderExampleText
