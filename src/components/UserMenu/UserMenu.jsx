import { Button } from 'components/PhonebookContactList/PhonebookContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { Greetings, UserMenuContainer } from './UserMenu.styled';
import { logOut } from 'redux/Auth/operations';
import { selectUser } from 'redux/Auth/selector';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserMenuContainer>
      <Greetings>Welcome, {user.name}</Greetings>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuContainer>
  );
};

export default UserMenu;
