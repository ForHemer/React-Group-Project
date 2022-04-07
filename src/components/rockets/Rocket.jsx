import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelRocket, reserveRocket } from '../../redux/rockets/rockets';

const Rocket = ({
  id, image, name, description, reserved,
}) => {
  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(reserveRocket(id));
  };
  const cancel = () => {
    dispatch(cancelRocket(id));
  };

  return (
    <div className="rocket-card" id={id}>
      <img className="rocket-img" src={image} alt="Rocket" />
      <div className="info-container">
        <h2 className="rocket-name">{name}</h2>
        <div>
          {reserved && <span className="reserved-badge">Reserved</span>}
          <p className="rocket-description">{description}</p>
        </div>
        {reserved ? (
          <button className="cancel-rocket" type="button" onClick={cancel}>Cancel reservation</button>
        ) : (
          <button className="rocket-btn" type="button" onClick={reserve}>Reserve Rocket</button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};

export default Rocket;
