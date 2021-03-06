import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import MissionsItem from './MissionsItem';

const MissionsList = () => {
  const missions = useSelector((state) => state.missionsReducer);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionsItem
            name={mission.mission_name}
            key={mission.mission_id}
            id={mission.mission_id}
            description={mission.mission_description}
            reserved={mission.reserved}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default MissionsList;
