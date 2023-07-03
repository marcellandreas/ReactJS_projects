import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { apiIntance } from "../../apis/Api";
import { setAuthTokenAndRole } from "../../config/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleLogin = async () => {
    try {
      const response = await apiIntance.post("/mitra/login", {
        email: email,
        password: password,
      });

      const token = response.data.data.accessToken;
      const role = response.data.data.role;

      // Set token autentikasi dan role
      setAuthTokenAndRole(token, role);

      console.log("Login berhasil");
      // redirect
      if (role === "mitra") {
        window.location.href = "/user";
        alert("selamat data mitra");
      } else if (role == "admin") {
        window.location.href = "/admin";
        alert("selamat datang admin");
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Login gagal", error.response.data.message);
      setErrMsg(error.response.data.message);
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
        {errMsg && <div style={{ color: "red" }}>{errMsg}</div>}
      </form>
    </div>
  );
};

export default Login;
