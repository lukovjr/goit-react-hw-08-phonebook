import axios from 'axios';

axios.defaults.baseURL = 'https://6491c1752f2c7ee6c2c8db00.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async contacts => {
  const { data } = await axios.post('/contacts', contacts);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};