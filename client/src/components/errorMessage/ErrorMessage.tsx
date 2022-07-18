import styled from 'styled-components';

type ErrorMessageProps = {
  displayError: boolean;
  errorMessage?: string;
}
const ErrorMessage = ({ errorMessage, displayError }: ErrorMessageProps) => (
  <Error opacity={displayError ? '1' : '0'}>{errorMessage ? errorMessage : 'This field is required'}</Error>
)

const Error = styled.span<{ opacity: string }>`
  color: ${props => props.theme.error};
  opacity: ${(props) => props.opacity};
  bottom: 2px;
  left: 2px;
  position: relative;
  font-size: 14px;
  position: relative;
`;
export default ErrorMessage;