import styled from 'styled-components';

type ImageProps = {
  image: string
  link?: string
  width?: string
  maxWidth?: string
}

type StyledProps = {
  width: string
  maxWidth: string
}

const Image = ({ link, maxWidth = '100%', width = '50px', image }: ImageProps) => {
  if (link) {
    return (
      <a href={link}>
        <Img width={width} maxWidth={maxWidth} src={image} alt='' />
      </a>
    )
  }
  return <Img width={width} maxWidth={maxWidth} src={image} alt='' />
}

const Img = styled.img<StyledProps>`
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  display: block;
  margin: 20px auto;
`;
export default Image