import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { api, setAuthTokenAndRole } from "../../apis/Api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await api.post("/mitra/login", {
        email: email,
        password: password,
      });

      const token = response.data.data.accessToken;
      const role = response.data.data.role;

      // Set token autentikasi dan role pengguna dalam Axios instance
      setAuthTokenAndRole(token, role);

      // Redirect atau lakukan tindakan lainnya setelah berhasil login
      console.log("Login berhasil");
      // Redirect atau lakukan tindakan lainnya setelah berhasil login
      if (role === "mitra") {
        window.location.href = "/user";
        alert("login");
      } else {
        <Navigate to={`/user`} />;
      }
    } catch (error) {
      console.error("Login gagal", error);
    }
  };
  if (navigate) {
    return <Navigate to="/user" />;
  }

  return (
    <div>
      <h1>Halaman Login</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
