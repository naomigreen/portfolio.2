import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'
import styled from 'styled-components';

type CardProps = {
  logo: string
  width: string
  maxWidth: string
  link: string
  text: any
  divider: boolean
}

type ImageProps = {
  width: string
  maxWidth: string
}

const Card = ({ logo, width, maxWidth, link, text, divider = true }: CardProps) => {
  return (
    <div>
      <ImageLink href={link} width={width} maxWidth={maxWidth} >
        <img src={logo} alt='' />
      </ImageLink>
      <TextContainer rehypePlugins={[rehypeRaw]} >
        {text}
      </TextContainer>
      {divider && <hr />}
    </div>
  )
}

const ImageLink = styled.a<ImageProps>`
img{
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  display: block;
  margin: 20px auto;
}
`;

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
  @media (max-width: 425px) {
    padding: 20px 0;
  }
`;

export default Card