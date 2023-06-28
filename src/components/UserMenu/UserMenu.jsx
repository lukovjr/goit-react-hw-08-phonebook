import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/operations";
import { Button } from '@chakra-ui/react'
import { LogOutDiv } from "./UserMenu.styled";

export const UserMenu = () => {
  const userName = useSelector(state => state.auth.user.name)
  const dispatch = useDispatch()
  
const handleLogOut =() => {
dispatch(logOut())

}

    
  return (
    <LogOutDiv>
      <p>{userName}</p>
      <Button colorScheme='blue' onClick={handleLogOut}>Logout</Button>
    </LogOutDiv>
  );
};