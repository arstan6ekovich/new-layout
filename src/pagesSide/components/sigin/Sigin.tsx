import scss from "./sigin.module.scss";
import swv from "../../../assets/Path.svg";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/productSlice";
const api = import.meta.env.VITE_URL;
const Sigin = () => {
  const dispatch = useDispatch()
    const googleLogin = () => {
      window.open(`${api}/api/v1/auth/login/google`, "_self");
    }
    const getMe = async () => {
      const { data } = await axios.get(`${api}/api/v1/auth/user`, {
        withCredentials: true,
      });
      console.log(data);
      return dispatch(addProduct(data))
    };

    useEffect(() => {
      getMe()
    }, [])

    return (
      <div className={scss.Sigin}>
        <div className="container">
          <div className={scss.block}>
            <button onClick={() => googleLogin()}>
              <img src={swv} alt="" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Sigin;
