import { Fragment } from "react";
import ExploreServices from "../../components/ExploreService/ExploreServices.module.css";
import HomeAbout from "../../components/HomeAbout";
import HomeImageSlider from "../../components/HomeImageSlider";
import HomeProcess from "../../components/HomeProcess";
import PopularServices from "../../components/PopularServices";
import JoinUsButton from "../../layouts/JoinUsButton";

const Home = () => {
  const slidesImage = [
    { url: "homeimageslider.jpg" },
    { url: "homeimageslider2.jpg" },
    { url: "homeimageslider3.jpg" },
    { url: "homeimageslider4.jpg" },
  ];

  const popularImages = [
    { image: "platewashing.jpg", title: "Plate washing" },
    { image: "painter2.jpg", title: "AC installation" },
    { image: "carpentry.jpg", title: "Carpentry" },
    { image: "homeimageslider3.jpg", title: "Flower cutting" },
    { image: "barbing2.jpg", title: "Barbing" },
    { image: "painter.jpg", title: "House painting" },
  ];

  const aboutImages = [
    { image: "ironing.jpg" },
    { image: "homeimageslider4.jpg" },
    { image: "homeimageslider2.jpg" },
    { image: "wiring.jpg" },
    { image: "electrician1.jpg" },
    { image: "barbing.jpg" },
  ];

  return (
    <Fragment>
      <HomeImageSlider slides={slidesImage} />
      <PopularServices services={popularImages} />
      <ExploreServices />
      <JoinUsButton>JOIN US TODAY</JoinUsButton>
      <HomeProcess />
      <HomeAbout abouts={aboutImages} />
    </Fragment>
  );
};

export default Home;
