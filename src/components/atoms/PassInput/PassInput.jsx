export const PassInput = () => {
  return (
    <input
      type="password"
      name="password"
      pattern="*"
      title="For testing password can be whatever you like"
      placeholder="Password need to be at least 4 characters."
      isRequired={true}
    />
  );
};