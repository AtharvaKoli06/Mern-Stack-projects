import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import useLocalStorage from "../customHook/UseLocalStorageHook";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  const { getLocalStorage, setLocalStorage, removeLocalStorage } =
    useLocalStorage("fetchedData");
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const [registerList, setRegisterList] = useState([]);
  const [loginList, setLoginList] = useState([]);
  const [logoutList, setLogoutList] = useState([]);

  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [logoutError, setLogoutError] = useState("");

  const [refreshTokenError, setRefreshTokenError] = useState("");

  let isAuthenticated = null;

  const removeToken = () => {
    const axiosInstance = axios.create();
    delete axiosInstance.defaults.headers.common["Authorization"];
  };

  const loginRef = useRef();
  const registerRef = useRef();
  const logoutRef = useRef();
  const refreshUserTokenRef = useRef();

  const loginUser = (data) => {
    loginRef.current = data;
    Login();
  };
  const registerUser = (data) => {
    registerRef.current = data;
    register();
  };
  const logoutUser = (data) => {
    logoutRef.current = data;
    logout();
  };
  const refreshUserToken = (data) => {
    refreshUserTokenRef.current = data;
    refreshToken();
  };

  async function Login() {
    setLoginLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/users/login`,
        loginRef.current
      );
      const data = res.data;
      const accessToken = data.data.accessToken;
      const refreshToken = data.data.refreshToken;
      setLocalStorage({ accessToken, refreshToken });

      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      setLoginList(data);
      setLoginLoading(false);
      setLocalStorage(data);
    } catch (e) {
      setLoginError(e);
      setLoginLoading(false);
    }
  }
  async function register() {
    setRegisterLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/users/register`,
        registerRef.current
      );
      const data = res.data;

      setRegisterList(data);
      setRegisterLoading(false);
      setLocalStorage(data);
    } catch (e) {
      setRegisterError(e);
      setRegisterLoading(false);
    }
  }
  async function logout() {
    setLogoutLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/users/logout`,
        null,
        {
          headers: {
            Authorization: `Bearer ${logoutRef.current} `,
          },
        }
      );
      const data = res.data;
      setLogoutLoading(false);
      removeLocalStorage();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setLoginList([]);
      setRegisterList([]);
      if (data) {
        setLogoutList(data);
      }
    } catch (e) {
      setLogoutError(e);
      setLogoutLoading(false);
    }
  }
  async function refreshToken() {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/refresh-token",
        refreshUserTokenRef.current
      );
      const newAccessToken = response.data.accessToken;
      localStorage.setItem("accessToken", newAccessToken);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newAccessToken}`;
      return newAccessToken;
    } catch (error) {
      setRefreshTokenError(`Error refreshing token: ${error}`);
      throw error;
    }
  }

  useEffect(() => {
    const fetchDataFromLocalStorage = () => {
      try {
        const data = getLocalStorage();
        if (data) {
          setLoginList(data);
          setRegisterList(data);
          setLogoutList(data);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.data.accessToken}`;
          isAuthenticated = data.data.accessToken;
        }
      } catch (error) {
        setLoginError(error);
        setRegisterError(error);
        setLogoutError(error);
      }
    };
    fetchDataFromLocalStorage();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        loginError,
        loginList,
        loginLoading,
        registerList,
        registerError,
        registerLoading,
        logoutList,
        logoutError,
        logoutLoading,
        isAuthenticated,
        loginUser,
        registerUser,
        logoutUser,
        refreshUserToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
