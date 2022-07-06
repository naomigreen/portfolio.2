import React from 'react'
import styled from 'styled-components';

type ContentProps = {
  children: any
}
const Content = ({ children }: ContentProps) => (
  <Backgroud>
    <Main>
      {children}
    </Main>
  </Backgroud>

)

const Main = styled.div`
  background-color: ${props => props.theme.secondary};
  padding: 30px 3% 0 ;
  margin: 150px auto 0;
  max-width: 85%;
  width: 1000px;
  min-height: 800px;
`;
const Backgroud = styled.div`
  background-color: ${props => props.theme.primary};
  height: 100%;
  position: relative;
  width: 100%;
  display: inline-block;
`;
export default Content