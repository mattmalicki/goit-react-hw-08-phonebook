import { useDispatch } from 'react-redux';

import { changeFilterName } from 'redux/filters/slice';

export const NameFilter = () => {
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(changeFilterName(event.target.value));
  };
  return (
    <div>
      <p>Find contacts by name:</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
