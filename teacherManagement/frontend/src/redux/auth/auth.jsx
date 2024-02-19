import { authRefreshToken } from "./AuthRefreshToken.slice";

const isAccessTokenExpired = (accessToken) => {
  if (!accessToken) {
    return `Error!! Your token is missing: ${error}`;
  }
  try {
    const payload = JSON.parse(atob(accessToken.split(".")[1]));

    const expiryTime = payload.exp * 1000;
    const currTime = Date.Time();
    const time = expiryTime < currTime;
    return time;
  } catch (error) {
    return `Error parsing access token: ${error}`;
  }
};

const authMiddleware = (store) => (next) => async (action) => {
  if (action.type.startsWith("api/") && !action.meta) {
    const { accessToken } = store.getState().auth;
    const isAccessTokenExp = isAccessTokenExpired(accessToken);

    if (isAccessTokenExp) {
      try {
        await store.dispatch(authRefreshToken());
        const { accessToken: newAccessToken } = store.getState().auth;
        action.headers = {
          ...action.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };
      } catch (error) {
        return `Token refresh failed: ${error}`;
      }
    } else {
      action.headers = {
        ...action.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
  }
  return next(action);
};

export default authMiddleware;
