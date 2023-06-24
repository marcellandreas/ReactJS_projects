import Cookies from "js-cookie";

export const Auth = {
  isAuthorization() {
    const token = Cookies.get("token");
    const role = Cookies.get("role");

    if ((token, role)) {
      return { token, role };
    }
    return { token: "", role: "" };
  },
  signOut() {
    return Cookies.remove("token") + Cookies.remove("role");
  },
};

import axios from "axios";

const api = axios.create({
  baseURL: "https://example.com/api",
});

// Fungsi untuk menambahkan token autentikasi ke header permintaan
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export { api, setAuthToken };
