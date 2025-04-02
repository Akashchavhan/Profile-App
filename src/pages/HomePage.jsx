import React, { useEffect, useState } from 'react';
import { getProfiles } from '../services/api';
import ProfileCard from '../components/ProfileCard';
import './HomePage.css'; // Custom styling for advanced tweaks

const HomePage = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    getProfiles().then(setProfiles);
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section text-center text-white py-5">
        <div className="container">
          <h1 className="display-4">Explore Profiles</h1>
          <p className="lead">Discover talented people and their stories.</p>
        </div>
      </section>

      <section className="profiles-section py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {profiles.map((profile) => (
              <div className="col" key={profile.id}>
                <ProfileCard profile={profile} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
