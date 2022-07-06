import { Link } from 'react-router-dom';
import styled from 'styled-components';
import genie from '../../assets/images/genie.gif';

const NotFound = () => (
  <ErrorContainer>
    <ErrorImage src={genie} alt='' />
    <ErrorText>Oh no, page not found! Please return to the <Link to='/'>home page</Link></ErrorText>
  </ErrorContainer>
)

const ErrorContainer = styled.div`
width: 90vw;
display: block;
margin: 0 auto;
text-align: center;
`
const ErrorImage = styled.img`
max-width: 100%;
width: 1000px;
margin-top: 10vh;       
`

const ErrorText = styled.h2`
font-size: 3vw;
`

export default NotFound