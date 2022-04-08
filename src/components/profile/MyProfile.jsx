import { useSelector } from 'react-redux';

const Profile = () => {
// eslint-disable-next-line max-len
  const rockets = useSelector((state) => (state.rocketReducer || []).filter((rocket) => rocket.reserved === true));

  return (
    <section>
      <div className="my-rockets">
        <h2 className="rocket-title">
          My Rockets
        </h2>
        <ul className="rocket-list">
          {rockets.map((rocket) => (<li className="rocket-item" key={rocket.id}>{rocket.name}</li>))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
