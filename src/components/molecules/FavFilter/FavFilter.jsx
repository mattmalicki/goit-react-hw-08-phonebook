import { AllButton } from 'components/atoms/AllButton/AllButton';
import { FavButton } from 'components/atoms/FavButton/FavButton';

export const FavFilter = () => {
  const handleChange = filter => console.log('Handling filter ', filter);
  return (
    <div>
      <AllButton />
      <FavButton fav={true} />
      <FavButton fav={false} />
    </div>
  );
};
