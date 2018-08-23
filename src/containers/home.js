import React,{Component} from 'react';
import Header from './header';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Container = styled.div`
  height:100%;
  position: relative;
  & > div > div{
    padding:20rem 0;
    background: pink;
    margin:1rem 0;
  }
  & > a {
    right:20px;
    bottom:20px;
    position: absolute;
  }
`,
ScrollContainer = styled.div`
  a {
    bottom:10px;
    position:fixed;
    right:20px;
  }
`

class ScrollButton extends Component{
  scrollToTop = () => {
    scroll.scrollToTop();
  }
  render(){
    return(
      <ScrollContainer>
        <a onClick={this.scrollToTop}>To the top!</a>
      </ScrollContainer>
    )
  }
}

export default class Home extends Component{
  render(){
    return(
      <Header>
      <Container>
          <div>
            <div>
              dsafasdsd
            </div>
            <div>
              dsafasdsd
            </div>
            <div>
              dsafasdsd
            </div>
            <div>
              dsafasdsd
            </div>
            <div>
              dsafasdsd
            </div>
            <div>
              dsafasdsd
            </div>
            <div>
              dsafasdsd
            </div>
            <div>
              dsafasdsd
            </div>
          </div>
          <div>
            <div>
              <ScrollButton/>
            </div>
          </div>

      </Container>
      </Header>
    )
  }
}
