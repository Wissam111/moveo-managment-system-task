import AuthActions from "@/actions/auth";
import useFetch from "@/hooks/useFetch";
import { SigninProps } from "@/types";
import { useDispatch } from "react-redux";

const useSignin = () => {
  const authActions = AuthActions();
  const dispatch = useDispatch();

  const { loading, fetchData } = useFetch();

  const handleSignin = async (values: SigninProps) => {
    const { email, password } = values;
    const response = await fetchData(async () =>
      authActions.signin({ email, password })
    );
    if (!response) return null;
    //@ts-ignore
    dispatch(authActions.onSignSuccess({ data: response }));
    return response;
  };
  return { handleSignin, loading };
};

export default useSignin;
