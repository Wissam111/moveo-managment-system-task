// @ts-nocheck
import { toast } from "react-toastify";
const useToast = () => {
  const showToast = (type, text) => {
    toast[type](text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      //   transition: Bounce,
    });
  };
  return { showToast };
};

export default useToast;
