import React from 'react';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import UserImg from '../subcomponents/UserImg.jsx';
import Leaderboard from '../subcomponents/Leaderboard.jsx';
import TempCard from '../subcomponents/TempCard.jsx';
import FavoritesList from '../subcomponents/FavoritesList.jsx';
import ActivityCard from '../subcomponents/ActivityCard.jsx';

const cardContainerStyle = {
  height: '200em'
};

const Profile = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/activities')
      .then((res) => setActivities(res.data))
      .catch(((err) => console.error(err)));
  }, []);


  return (
    <div className="home">
      <div className="profile-top">
        <UserImg />
        <div className="profile-sub">
          <h3 className="welcome">Collected Badges</h3>
          <div className="profile-badge">TEST</div>
        </div>
        <Leaderboard className="profile-board"/>
      </div>
      <h2 className="welcome">Arnold's Activities</h2>
      <div className="card-container">
        <FavoritesList />
      </div>
    </div>
  );
};

export default Profile;
