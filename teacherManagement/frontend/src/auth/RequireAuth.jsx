import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthSystem";
import useLocalStorage from "../customHook/UseLocalStorageHook";

const RequireAuth = () => {
  const location = useLocation();
  const { getLocalStorage } = useLocalStorage("fetchedData");

  const token = getLocalStorage();

  return (
    <>
      {token?.data?.accessToken ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
