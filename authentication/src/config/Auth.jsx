import { apiIntance } from "../apis/Api";
import Cookies from "js-cookie";

// token autentikasi dan role pengguna
const setAuthTokenAndRole = (token, role) => {
  Cookies.set("authToken", token);
  Cookies.set("userRole", role);

  // Mengatur token autentikasi dalam header permintaan
  if (token) {
    apiIntance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiIntance.defaults.headers.common["Authorization"];
  }
};

// role
const getUserRole = () => {
  return Cookies.get("role");
};

const signOut = () => {
  // Menghapus token autentikasi dan role dari cookie
  Cookies.remove("authToken");
  Cookies.remove("userRole");

  // Menghapus token autentikasi dari header permintaan
  delete apiIntance.defaults.headers.common["Authorization"];
};

export { setAuthTokenAndRole, getUserRole, signOut };
