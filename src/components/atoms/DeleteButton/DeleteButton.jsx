import { Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export const DeleteButton = ({ onClick }) => {
  return (
    <Button
      type="button"
      colorScheme="red"
      color="#a70505ab"
      variant="outline"
      onClick={onClick}
    >
      <DeleteIcon />
    </Button>
  );
};
