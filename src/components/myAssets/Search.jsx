import React,{Fragment} from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react'
import {MyAssetsConsumer} from '../../containers/myAssets/myAssets';

const SearchContainer = styled.div`
  width:80%;
  margin:0 auto;
  padding-bottom:2rem;
`


export const Search = () => (
  <MyAssetsConsumer>
    {
      ({searchProps}) => (
        <SearchContainer>
          <Input fluid icon='search' placeholder='Search...'
            value={searchProps.value}
            onChange={searchProps.onChange}
          />
        </SearchContainer>
      )
    }
  </MyAssetsConsumer>
)
