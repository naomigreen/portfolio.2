import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import rehypeRaw from 'rehype-raw'
import ImageLink from '../imageLink/ImageLink';

type CardProps = {
  logo: string
  width: string
  maxWidth: string
  link: string
  text: any
  divider: boolean
}

const Card = ({ logo, width, maxWidth, link, text, divider = true }: CardProps) => (
  <div>
    <ImageLink link={link} width={width} maxWidth={maxWidth} image={logo} />
    <TextContainer rehypePlugins={[rehypeRaw]} >
      {text}
    </TextContainer>
    {divider && <hr />}
  </div>
)

const TextContainer = styled(ReactMarkdown)`
  padding: 20px;
  width: 700px;
  margin: 0 auto;
  max-width: 95%;

  li {
    list-style-type: none;
  }
  ul {
    padding-left: 0;
  }
  a{
    color: ${props => props.theme.link};
  }
  a:visited(
    color: ${props => props.theme.link};
  )
  @media (max-width: 425px) {
    padding: 20px 0;
  }
`;

export default Card