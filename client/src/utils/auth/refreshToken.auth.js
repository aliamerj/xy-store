import axios from "axios";
import { userRequest } from "../../requestMethods";
import { SUCCESS_LOGIN, SIGN_OUT } from "../../store/auth.store/authSlice";
// user from currentUser
const refreshToken = async (user, dispatch) => {
  try {
    const res = await userRequest.post("/refresh", user);
    dispatch(SUCCESS_LOGIN(res.data));
  } catch (error) {
    try {
      await userRequest.put("/signout");
      dispatch(SIGN_OUT());
    } catch (error) {
      dispatch(SIGN_OUT());
    }
  }
};

export default refreshToken;
