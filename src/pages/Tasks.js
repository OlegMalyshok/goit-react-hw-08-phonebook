// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { FormTel, TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
// import { selectLoading } from 'redux/tasks/selectors';

// export default function Tasks() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <>
//       <Helmet>
//         <title>Your tasks</title>
//       </Helmet>
//       <TaskEditor />
//       <div>{isLoading && 'Request in progress...'}</div>
//       <TaskList />
//     </>
//   );
// }

import { Container } from '../components/App.styled';
import { PhonebookFormList } from '../components/PhonebookFormList';
import { PhonebookForm } from '../components/PhonebookForm/PhonebookForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h2>Phonebook</h2>
      <PhonebookForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <PhonebookFormList />
    </Container>
  );
}
