const GETROCKET = 'rockets/rockets/GET_ROCKET';
const RESERVEROCKET = 'rockets/rockets/RESERVE_ROCKET';
const CANCELROCKET = 'rockets/rockets/CANCEL_ROCKET';

export const getRockets = (payload) => ({
  type: GETROCKET,
  payload,
});

export const reserveRocket = (id) => ({
  type: RESERVEROCKET,
  id,
});

export const cancelRocket = (id) => ({
  type: CANCELROCKET,
  id,
});

const startingState = null;

export const rocketReducer = (state = startingState, action) => {
  switch (action.type) {
    case GETROCKET:
      return action.payload;
    case RESERVEROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case CANCELROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

const api = 'https://api.spacexdata.com/v3/rockets';

export const rocketAPICall = async () => {
  const response = await fetch(api);
  const data = await response.json();
  const rockets = [];
  data.forEach((rocket) => {
    rockets.push({
      id: rocket.id,
      name: rocket.rocket_name,
      image: rocket.flickr_images[0],
      description: rocket.description,
      reserved: false,
    });
  });
  return rockets;
};
