// src/pages/ProfileDetailsPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProfileById } from '../services/api';
import MapComponent from '../components/MapComponent';

const ProfileDetailsPage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfileById(Number(id)).then(setProfile);
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.image} alt={profile.name} />
      <p>{profile.description}</p>
      <h3>Location</h3>
      <MapComponent address={profile.address} />
    </div>
  );
};

export default ProfileDetailsPage;
