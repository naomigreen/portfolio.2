import styled from 'styled-components';

type ImageLinkProps = {
  link: string
  image: string
  width?: string
  maxWidth?: string
}

type StyledProps = {
  width: string
  maxWidth: string
}

const ImageLink = ({ link, maxWidth = '100%', width = '50px', image }: ImageLinkProps) => (
  <Link href={link} width={width} maxWidth={maxWidth} >
    <img src={image} alt='' />
  </Link>
)

const Link = styled.a<StyledProps>`
img{
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  display: block;
  margin: 20px auto;
}
`;
export default ImageLink