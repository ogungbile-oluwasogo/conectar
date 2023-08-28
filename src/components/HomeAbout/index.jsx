import { Link } from "react-router-dom";
import style from "./HomeAbout.module.css";

const HomeAbout = ({ abouts }) => {
  return (
    <div className={style["home-about-container"]}>
      <div className={style["about-flex-one"]}>
        <h3>OUR MISSION</h3>
        <p>
          Our mission is to create a thriving community where service providers
          can showcase their expertise and recipients can easily find and engage
          with the perfect service for their needs. <br />
          <Link to="about">Read More...</Link>
        </p>

        <h4>We: </h4>
        <ul>
          <li>
            <span>&#10004;</span>Streamlining the Selection Process
          </li>
          <li>
            <span>&#10004;</span>Simplifying the Booking and Scheduling Process
          </li>
          <li>
            <span>&#10004;</span>Ensuring Transparent pricing
          </li>
          <li>
            <span>&#10004;</span>Providing Quality Assurance
          </li>
          <li>
            <span>&#10004;</span>Handling Disputes and Customer Support
          </li>
        </ul>
      </div>
      <div className={style["about-flex-two"]}>
        {abouts.map((about, index) => (
          <img key={index} src={about.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default HomeAbout;
