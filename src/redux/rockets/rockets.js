const GETROCKET = 'rockets/rockets/GET_ROCKET';
const RESERVEROCKET = 'rockets/rockets/RESERVE_ROCKET';
const CANCELROCKET = 'rockets/rockets/CANCEL_ROCKET';

export const rocketsData = (payload) => ({
  type: GETROCKET,
  payload,
});

export const reserveRocket = (id) => ({
  type: RESERVEROCKET,
  id,
});

export const removeReservation = (id) => ({
  type: CANCELROCKET,
  id,
});

const startingState = [];

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
