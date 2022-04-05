import PropTypes from 'prop-types';

const Rocket = ({
  id, image, name, description,
}) => (
  <div className="rocket-container" id={id}>
    <img className="rocket-img" src={image} alt="Rocket" />
    <div>
      <h2 className="rocket-name">{name}</h2>
      <p className="rocket-description">{description}</p>
      <button className="rocket-btn" type="button">Reserve Rocket</button>
      <button className="rocket-btn" type="button">Cancel reservation</button>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
