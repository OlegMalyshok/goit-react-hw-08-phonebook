import { Container, Title } from 'components/AuthForm/AuthForm.styled';
import { RegisterForm } from 'components/AuthForm/RegisterForm';

const RegisterPage = () => {
  return (
    <Container>
      <Title>Registration</Title>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;
