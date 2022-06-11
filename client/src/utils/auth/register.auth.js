import { publicRequest } from "../../requestMethods";
import _ from "lodash";
import {
  FAILURE_LOGIN,
  START_LOGIN,
  SUCCESS_LOGIN,
} from "../../store/auth.store/authSlice";

const registerHandler = async (user, dispatch) => {
  dispatch(START_LOGIN());
  try {
    const res = await publicRequest.post(
      "/register",
      _.pick(user, [
        "firstName",
        "lastName",
        "email",
        "password",
        "country",
        "city",
        "address1",
        "address2",
        "zip",
      ])
    );
    dispatch(SUCCESS_LOGIN(res.data));
  } catch (error) {
    dispatch(FAILURE_LOGIN(error.response.data));
  }
};

export default registerHandler;
