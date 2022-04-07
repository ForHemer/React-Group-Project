import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [reservedRockets, displayRockets] = useState([]);
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    displayRockets(rockets.filter((rocket) => rocket.reserved === true));
  });

  return (
    <section>
      <div className="my-rockets">
        <h2 className="rocket-title">
          My Rockets
        </h2>
        <ul className="rocket-list">
          {reservedRockets.map((rocket) => <li className="rocket-item" key={rocket.id}>{rocket.name}</li>)}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
