import { verifyToken } from "../utils/jwt.js";
import appAssert from "../utils/app-assert.js";
import { UNAUTHORIZED } from "../constants/http.js";
import AppErrorCode from "../constants/app-error-code.js";

const authenticate = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  appAssert(
    accessToken,
    UNAUTHORIZED,
    "Not authenticated",
    AppErrorCode.InvalidAccessToken
  );

  const { error, payload } = verifyToken(accessToken);
  appAssert(
    payload,
    UNAUTHORIZED,
    (error = "jwt expired" ? "Token expired" : AppErrorCode.InvalidAccessToken)
  );

  req.userId = payload.userId;
  req.sessionId = payload.sessionId;
  next();
};

export default authenticate;
