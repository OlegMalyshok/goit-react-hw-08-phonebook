import { Container, Title } from 'components/AuthForm/AuthForm.styled';
import { LoginForm } from 'components/AuthForm/LoginForm';

const LoginPage = () => {
  return (
    <Container>
      <Title>Log In</Title>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
