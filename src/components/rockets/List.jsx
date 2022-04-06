import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './Rocket';
import { rocketAPICall, rocketReducer } from '../../redux/rockets/rockets';

let initialLoad = false;

const List = () => {
  const dispatch = useDispatch();
  const rocketStorage = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    if (!initialLoad) {
      dispatch(rocketAPICall());
      initialLoad = true;
    }
  }, [dispatch]);
  return (
    <div>
      {rocketStorage.map((rocket) => (
        <Rocket
          name={rocket.name}
          image={rocket.image}
          key={rocket.id}
          id={rocket.id}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};
