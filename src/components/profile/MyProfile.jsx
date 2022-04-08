import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import ProfileMissions from '../missions/ProfileMissions';
import style from './Profile.module.css';

const Profile = () => {
  const rockets = useSelector((state) => (state.rocketReducer || [])
    .filter((rocket) => rocket.reserved === true));
  const missionList = useSelector((state) => state.missionsReducer);
  const profileMission = missionList.filter((mission) => mission.reserved === true);
  return (
    <section className={style.flex}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={2}>My Missions</th>
          </tr>
        </thead>
        <tbody>
          {profileMission.length ? (
            <>
              {profileMission.map((item) => (
                <ProfileMissions
                  key={item.mission_id}
                  id={item.mission_id}
                  name={item.mission_name}
                  description={item.mission_description}
                />
              ))}
            </>
          ) : (
            <tr className="empty"><td>You have not joined any missions</td></tr>
          )}
        </tbody>
      </Table>
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
