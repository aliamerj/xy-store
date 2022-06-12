import { publicRequest } from "../../requestMethods";
import {
  FAILURE_LOGIN,
  START_LOGIN,
  SUCCESS_LOGIN,
} from "../../store/auth.store/authSlice";

const loginHandler = async (user, dispatch) => {
  dispatch(START_LOGIN());
  try {
    const res = await publicRequest.post("/login", {
      email: user.email,
      password: user.password,
    });
    dispatch(SUCCESS_LOGIN(res.data));
  } catch (error) {
    dispatch(FAILURE_LOGIN(error.response.data));
  }
};

export default loginHandler;
