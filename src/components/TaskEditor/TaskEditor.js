import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import css from './TaskEditor.module.css';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  );
};

// import { Container } from '../App.styled';
// import { PhonebookFormList } from '../PhonebookFormList';
// import { PhonebookForm } from '../PhonebookForm/PhonebookForm';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';

// export const FormTel = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <h2>Phonebook</h2>
//       <PhonebookForm />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <PhonebookFormList />
//     </Container>
//   );
// };
