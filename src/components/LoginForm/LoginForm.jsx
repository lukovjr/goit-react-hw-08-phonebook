import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Grid, Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import { Notify } from 'notiflix';

export const LoginForm = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
        await dispatch(logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
    })).unwrap();
        Notify.success(`Welcome, ${form.elements.email.value}`);
        form.reset();
    } catch (error) {
       Notify.error('Login error. Please enter correct data')
    }
};

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <Input type="email" name="email"  size={'md'} width={'500px'}  borderColor={'#56bd77'}/>
      </label>
      <label>
        Password
        <Input type="password" name="password" size={'md'} width={'500px'} borderColor={'#56bd77'}/>
      </label>
      <Button  colorScheme='whatsapp' marginTop={5} type="submit" size={'md'}>Log In</Button>
    </form>
    </Grid>
    );
  };
