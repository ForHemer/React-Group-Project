const JOIN_MISSION = 'space-travelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers/missions/LEAVE_MISSION';
const GET_MISSIONS = 'space-travelers/missions/GET_MISSIONS';
const baseURL = 'https://api.spacexdata.com/v3/missions';

// Action creators

export const joinMission = (payload) => (
  {
    type: JOIN_MISSION,
    payload,
  }
);

export const leaveMission = (payload) => (
  {
    type: LEAVE_MISSION,
    payload,
  }
);

export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,

});

