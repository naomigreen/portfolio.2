import styled from 'styled-components';
import { socialData } from '../../data/data';
import { tickIcon } from '../../assets/images';
import ImageLink from '../imageLink/ImageLink';
import ErrorMessage from '../errorMessage/ErrorMessage';

type FormProps = {
  register: any
  onSubmit: () => void
  sending: boolean
  errors: any
}

const Form = ({ register, onSubmit, sending, errors }: FormProps) => {
  console.log(sending);

  return (
    <Layout>
      <Img src={tickIcon} width='40px' opacity={sending ? '0.6' : '0'} />
      <form data-testid='form' onSubmit={onSubmit}>
        <Input placeholder='Name' type='text' {...register("name", { required: true })} />

        {errors.name && <ErrorMessage />}
        <Input placeholder='Email' type='email' {...register("email", { pattern: /[^@\s]+@[^@\s]+/i, required: true })} />
        {errors.email && <ErrorMessage custom='This field is required and must be an email.' />}
        <TextArea placeholder='Message' type='text' {...register("message", { required: true })} />
        {errors.message && <ErrorMessage />}
        <ButtonContainer>
          <Button type='submit'>
            Send message
          </Button>
          <Links>
            {socialData.map((data) => (
              <ImageLink key={data.link} link={data.link} image={data.image} width='23px' maxWidth='calc(33% - 10px)' />
            ))}
          </Links>
        </ButtonContainer>
      </form>
    </Layout>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: calc(100% - 22px);
  padding: 7px 10px;
  margin: 10px 0;
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
  margin: 10px 0;
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

const Button = styled.button`
  transition: all 0.6s ease;
  padding: 10px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  color: ${props => props.theme.text};
  font-weight: 900;
  background: ${props => props.theme.input};
  font-size: 14px;
  :hover {
    background: ${props => props.theme.buttons};
    color: ${props => props.theme.hoverText};
  }
`;

const Img = styled.img<{ opacity: string }>`
	transition: all 0.9s ease;
	width: 35px;
	max-width: 33%;
	border-radius: 100%;
	opacity: ${(props) => props.opacity};
	padding: 0 0 10px;
	display: block;
	margin: 0 auto;
`;

const Links = styled.div`
  display: inline-block;
  img{
    display: inline;
    margin: 0px 5px;
    background: ${props => props.theme.buttons};
    border-radius: 100%;
    padding: 6px;
  }
`;

const Layout = styled.div`
  width: 500px;
  max-width: 95%;
  margin: 0 auto;
`;
export default Form