import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import Footer from "../components/Footer";
import { fetchCartData } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (user) {
      const cartDataFetchHandler = async () => {
        await fetchCartData(dispatch, user);
      };
      cartDataFetchHandler();
    }
  }, [user]);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <PopularProducts />
      <Footer />
    </div>
  );
};

export default Home;
