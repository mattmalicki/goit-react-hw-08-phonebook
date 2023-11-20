import { favIcon, noFavIcon } from 'services/icons';

export const FavButton = ({ fav = false }) => {
  return (
    <button type="button">
      <svg width="20" height="20">
        <path d={fav ? favIcon : noFavIcon} />
      </svg>
    </button>
  );
};
