import axios from "axios";
import { SUCCESS_LOGIN, SIGN_OUT } from "../../store/auth.store/authSlice";

const refreshToken = async (user, dispatch) => {
  try {
    const res = await axios.post("/refresh", {
      refrechToken: user.refrechToken,
    });
    dispatch(SUCCESS_LOGIN(res.data));
  } catch (error) {
    dispatch(SIGN_OUT());
  }
};


