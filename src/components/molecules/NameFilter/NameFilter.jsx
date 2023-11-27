import { useDispatch } from 'react-redux';

import { changeFilterName } from 'redux/filters/slice';

import { Input } from '@chakra-ui/react';

const filterStyles = {
  width: '100%',
  marginBottom: '15px',
  padding: '5px',
  border: '1px solid black',
  borderRadius: '5px',
  backgroundColor: 'rgba(188, 199, 145, 0.55)',
};

export const NameFilter = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(changeFilterName(event.target.value));
  };
  return (
    <div style={filterStyles}>
      <p>Find contacts by name:</p>
      <Input
        type="text"
        focusBorderColor="teal.400"
        color="teal"
        onChange={handleChange}
      />
    </div>
  );
};
