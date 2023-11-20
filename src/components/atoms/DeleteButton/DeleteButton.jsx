import { deleteIcon } from 'services/icons';

export const DeleteButton = () => {
  return (
    <button type="button">
      <svg width="20" height="20">
        <path d={deleteIcon} />
      </svg>
    </button>
  );
};
