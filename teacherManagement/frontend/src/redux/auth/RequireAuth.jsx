import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const dataLogin = useSelector((state) => state.Login);
  const { data } = dataLogin;
  const location = useLocation();

  const token = data?.data?.data || "";
  const { accessToken } = token;
  return (
    <>
      {accessToken ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
