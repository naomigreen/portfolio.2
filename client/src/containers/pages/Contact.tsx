import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import Content from '../../components/content/Content';
import Form from '../../components/form/Form';

type Inputs = {
  name: string,
  email: string,
  message: string
};
const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
  const [sending, setSending] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data: { name: string, email: string, message: string }) => {
    setSending(true)
    sendMessage(
      data.name,
      data.email,
      data.message,
      process.env.REACT_APP_EMAILJS_TEMPLATEID,
      process.env.REACT_APP_EMAILJS_SERVICEID,
      process.env.REACT_APP_EMAILJS_USERID,
      process.env.REACT_APP_EMAILJS_RECEIVER
    );
    reset();
  };

  const sendMessage = (
    senderName: string,
    senderEmail: string,
    senderMessage: string,
    templateId: string | undefined,
    serviceId: string | undefined,
    userID: string | undefined,
    receiver: string | undefined) => {
    window.emailjs
      .send(
        serviceId,
        templateId,
        {
          to_email: receiver,
          from_email: senderEmail,
          from_name: senderName,
          message_html: senderMessage
        },
        userID
      ).catch((err: any) => console.error('Failed to send message. Error: ', err));
  }

  return (
    <Content>
      <Form register={register} errors={errors} onSubmit={handleSubmit(onSubmit)} sending={sending} />
    </Content>
  )
}
export default Contact;