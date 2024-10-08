import { useState } from 'react';
import PropTypes from 'prop-types';

const EditProfile = ({ userData, onUpdate }) => {
  const [formData, setFormData] = useState(userData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div>
        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <div className="input-group">
            <input className="input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            <label className="user-label" htmlFor='name'>Name:</label>
          </div>
          {/* EMAIL */}
          <div className="input-group">
            <input className="input" type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            <label className="user-label" htmlFor='email'>Email:</label>
          </div>
          {/* PASSWORD */}
          <div className="input-group">
            <input className="input" type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
            <label className={`user-label ${formData.password ? '!translate-y-[-50%] scale-[0.8]' : ''}`} htmlFor="password">Password:</label>
          </div>
          {/* BIO */}
          <div className="input-group">
            <textarea className="input" id="bio" name="bio" value={formData.bio} onChange={handleChange} />
            <label className="user-label" htmlFor='bio'>Bio:</label>
          </div>
          {/* UBDATE BUTTON */}
          <div className="flex justify-center items-center">
            <button className="text-slate-100" type="submit">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    bio: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EditProfile;
