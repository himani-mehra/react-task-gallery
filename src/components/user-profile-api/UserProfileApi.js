import React, { useEffect, useState } from 'react'
import "./UserProfileApi.css";

const UserProfileApi = () => {
const [userProfile, setUserProfile] = useState([]);
const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleUserProfile = async() => {
      try {
        const response = await fetch("https://randomuser.me/api/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await response.json()
        setUserProfile(data.results[0])
        setLoading(false);
      } catch(error) {
        console.log("Error in fetching data");
        setLoading(false);
      }
    }
    handleUserProfile();
  }, [])

  const Shimmer = () => (
    <div
      style={{
        height: '40vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: 500,
          padding: 40,
          borderRadius: 12,
          backgroundColor: '#fff',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            marginBottom: 20,
          }}
        />
        <div
          style={{
            height: 24,
            width: '60%',
            marginBottom: 15,
            background: 'linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
        <div
          style={{
            height: 18,
            width: '80%',
            background: 'linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
  
        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% 0 }
            100% { background-position: -200% 0 }
          }
        `}</style>
      </div>
    </div>
  );
  
  
  if (loading) return <Shimmer />;
  return (
    <div className="user-card-wrapper">
      <h2 className="user-card-name">{userProfile?.name?.first} {userProfile?.name?.last}</h2>
      <img className="user-card-image" src={userProfile?.picture?.large} alt="User" />
      <p className="user-card-info">Email: {userProfile?.email}</p>
      <p className="user-card-info">
        Location: {userProfile?.location?.city}, {userProfile?.location?.country}
      </p>
    </div>
  );
  
}

export default UserProfileApi