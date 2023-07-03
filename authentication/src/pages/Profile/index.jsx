import React, { useEffect, useState } from "react";
import { apiIntance } from "../../apis/Api";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiIntance.get("/profile");
        setUser(response.data);
      } catch (error) {
        console.error("Gagal mengambil profil", error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profil Pengguna</h1>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
