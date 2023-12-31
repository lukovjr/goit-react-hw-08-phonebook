import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Grid, Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };


  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
    <form onSubmit={handleSubmit} autoComplete="off">
    <label>
      Username
      <Input type="text" name="name" size={'md'} width={'500px'} borderColor={'#56bd77'}/>
    </label>
    <label>
      Email
      <Input type="email" name="email"  size={'md'} width={'500px'} borderColor={'#56bd77'}/>
    </label>
    <label>
      Password
      <Input type="password" name="password" size={'md'} width={'500px'} borderColor={'#56bd77'}/>
    </label>
    <Button colorScheme='whatsapp' marginTop={5} type="submit" size={'md'}>Register</Button>
  </form>
  </Grid>
  );
};