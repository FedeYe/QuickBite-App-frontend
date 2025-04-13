import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallBackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  // here declare the custom hook for creating a User
  const { createUser } = useCreateMyUser();

  // react hook used for storing a state value,
  // to make sure that once the value changes there will be no further calls
  // -> so that "useEffect" is called only once
  const hasCreatedUser = useRef(false);

  // It will call the backend through the "createUser" function
  // -> will use the CUSTOM HOOK for creating a User, passing id and email of the user
  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/"); 
  }, [createUser, navigate, user]);

  return <>Loading...</>; 
};

export default AuthCallBackPage;
