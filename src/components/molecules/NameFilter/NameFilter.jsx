export const NameFilter = () => {
  const handleFilter = () => {
    console.log('Handling name filter');
  };
  return (
    <div>
      <p>Find contacts by name:</p>
      <input type="text" onChange={handleFilter} />
    </div>
  );
};
