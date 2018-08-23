import React from 'react';
import styled from 'styled-components'
import Emoji from 'react-emoji-render';
import {MyAssetsConsumer} from '../../containers/myAssets/myAssets';


const StyledNavigation = styled.div.attrs({
  flex:props => props.flex || 20
})`
  background-color:${props => props.day ? 'yellow' : "black"};
  color:${props => props.day ? 'black' : "white"};
  flex: 0 0 ${props => props.flex}%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,
  StyledButton = styled.button`
    width:14rem;
    background-color:${props => props.day ? 'white' : "black"};
    color:${props => props.day ? 'black' : "white"};
  `

export const Navigation = ({width}) => (
  <MyAssetsConsumer>
    {
      contextValue => (
        <StyledNavigation day={contextValue.nightColorThemeIsOn} flex={width}>
          <StyledButton onClick={contextValue.toggle} day={contextValue.nightColorThemeIsOn}>
            {
              contextValue.nightColorThemeIsOn
              ? <Emoji text="change to 🌙 theme" />
              : <Emoji text="change to 🌞 theme" />
            }
          </StyledButton>
        </StyledNavigation>
      )
    }
  </MyAssetsConsumer>
)
