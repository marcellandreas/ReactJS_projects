import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:5000/api/",
});

// Fungsi untuk mengatur token autentikasi dan role pengguna
const setAuthTokenAndRole = (token, role) => {
  Cookies.set("authToken", token);
  Cookies.set("userRole", role);

  // Mengatur token autentikasi dalam header permintaan
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

// Fungsi untuk mendapatkan role pengguna saat ini
const getUserRole = () => {
  return Cookies.get("userole");
};

const signOut = () => {
  // Menghapus token autentikasi dan role dari cookie
  Cookies.remove("authToken");
  Cookies.remove("userRole");

  // Menghapus token autentikasi dari header permintaan
  delete api.defaults.headers.common["Authorization"];
};

export { api, setAuthTokenAndRole, getUserRole, signOut };
