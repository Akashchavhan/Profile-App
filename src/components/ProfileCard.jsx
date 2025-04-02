import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileCard.css'; // Custom styles for minor tweaks

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${profile.id}`);
  };

  return (
    <div className="card profile-card shadow-lg rounded-lg">
      <img
        src={profile.image}
        alt={profile.name}
        className="card-img-top rounded-circle mx-auto mt-4"
        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">{profile.description}</p>
        <button className="btn btn-primary" onClick={handleClick}>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
