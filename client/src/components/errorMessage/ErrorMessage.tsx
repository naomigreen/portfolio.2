import styled from 'styled-components';

type ErrorMessageProps = {
  custom?: string;
}
const ErrorMessage = ({ custom }: ErrorMessageProps) => {
  if (custom) {
    return <Error>{custom}</Error>
  }
  return <Error>This field is required</Error>
}

const Error = styled.span`
  color: ${props => props.theme.error};;
  bottom: 8px;
  position: relative;
`;
export default ErrorMessage;