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
      fetchCartData(dispatch, user);
    }
  }, []);

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
