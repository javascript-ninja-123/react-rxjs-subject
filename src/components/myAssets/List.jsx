import React,{Fragment} from 'react';
import styled from 'styled-components';
import {MyAssetsConsumer} from '../../containers/myAssets/myAssets';
import Card from './Card';
import Loader from './Loader'

const StyledList = styled.ul`
  list-style: none;
  margin:0;
  padding:2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  grid-auto-rows: auto;
  justify-items: center;
  align-items: center;
`


export const List = () => (
  <MyAssetsConsumer>
    {
      ({listProps}) => {
        if(listProps.loading){
          return <Loader/>
        }
        return(
          <StyledList>
            {
              listProps.assetList && listProps.assetList.reduce((acc,val,i) => {
                const newVal = <Card key={i+val.title} {...val}/>
                acc[i] = newVal
                return acc;
              }, new Array(listProps.assetList.length))
            }
          </StyledList>
        )
      }
    }
  </MyAssetsConsumer>
)
