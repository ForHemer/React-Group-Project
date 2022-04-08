import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './Rocket';
import { getRockets, rocketAPICall } from '../../redux/rockets/rockets';

const RocketList = () => {
  const dispatch = useDispatch();
  const rocketStorage = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    async function getRocketData() {
      if (rocketStorage === null) {
        const fetch = await rocketAPICall();
        dispatch(getRockets(fetch));
      }
    }
    getRocketData();
  }, []);

  return (
    <div>
      {(rocketStorage || []).map((rocket) => (
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

const DisplayedRockets = () => (
  <section>
    <RocketList />
  </section>
);

export default DisplayedRockets;
