import React, { useState } from 'react';

const CandidateDashboard = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    resume: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('email', profile.email);
    formData.append('resume', profile.resume);

    // Submit profile and resume (replace with actual API)
    fetch('/api/profile', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div>
      <h1>Candidate Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default CandidateDashboard;