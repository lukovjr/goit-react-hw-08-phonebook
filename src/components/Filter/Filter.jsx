import { InputFilter } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter  = e => {
    dispatch(filterContacts(e.target.value));
  };


  return (
    <label>
      Find contacts by name
      <InputFilter type="text" name="filter" onChange={changeFilter } />
    </label>
  );
};
