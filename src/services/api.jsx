// src/services/api.js

const profiles = [
    { id: 1, name: 'John Doe', image: 'https://www.w3schools.com/w3images/avatar2.png', address: '1600 Amphitheatre Parkway, Mountain View, CA', description: 'Software Developer' },
    { id: 2, name: 'Jane Smith', image: 'https://www.w3schools.com/w3images/avatar2.png', address: '1 Infinite Loop, Cupertino, CA', description: 'Product Manager' },
  ];
  
  
  export const getProfiles = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(profiles), 1000);
    });
  };
  
  export const getProfileById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(profiles.find(profile => profile.id === id)), 1000);
    });
  };
  