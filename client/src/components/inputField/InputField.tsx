import React from 'react';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage/ErrorMessage';

type InputFieldProps = {
  placeholder: string,
  type: string,
  isTextArea?: boolean,
  ref: any
  error: boolean
  errorMessage?: string
}

const InputField = React.forwardRef(({ placeholder, type, isTextArea, error, errorMessage }: InputFieldProps, ref) => (
  <>
    {isTextArea ? <TextArea placeholder={placeholder} {...ref} /> :
      <Input placeholder={placeholder} type={type}{...ref} />}
    <ErrorMessage displayError={error} errorMessage={errorMessage} />
  </>
))

const Input = styled.input`
  width: calc(100% - 22px);
  padding: 7px 10px;
  margin: 5px 0;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  outline: none;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.input};
  font-size: 16px;
  ::placeholder {
    color: ${props => props.theme.placeholder};
  }
  :-webkit-autofill:focus,
  :-webkit-autofill:hover,
  :-webkit-autofill {
    -webkit-text-fill-color: ${props => props.theme.text};
    -webkit-box-shadow: 0 0 0px 1000px ${props => props.theme.input} inset;
  }
`;

const TextArea = styled.textarea`
  width: calc(100% - 22px);
  padding: 7px 10px;
  margin: 5px 0;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  outline: none;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.input};
  font-size: 16px;
  min-height: 200px;
  font-family: Helvetica, monospace;
  ::placeholder {
    color: ${props => props.theme.placeholder};
  }
`;

export default InputField