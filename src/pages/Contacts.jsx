import { Container, Title } from 'components/AuthForm/AuthForm.styled';
import ContactForm from 'components/AuthForm/PhonebookContactForm';
import ContactList from 'components/PhonebookContactList/PhonebookContactList';
import Filter from 'components/PhonebookFilter/PhonebookFilter';

const ContactsPage = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
