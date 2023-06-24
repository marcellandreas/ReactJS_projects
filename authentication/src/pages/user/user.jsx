import { useNavigate } from "react-router-dom";
import { signOut } from "../../config/Auth";

const User = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut();
    navigate("/");
  };

  return (
    <>
      <h1>Berhasil Login</h1>
      <div>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </>
  );
};

export default User;
