import style from "./HomeAbout.module.css";

const HomeAbout = ({ abouts }) => {
  return (
    <div className={style["home-about-container"]}>
      <div className={style["about-flex-one"]}>
        <h3>CONECTAR</h3>
        <p>
          In the modern world, homeowners often find themselves in need of
          various services for their homes, ranging from plumbing and electrical
          work to home repairs and maintenance. On the other hand, numerous
          skilled professionals and service providers excel in these fields,
          offering their expertise and assistance. However, connecting these two
          parties efficiently and ensuring a seamless experience can be
          challenging. This is where a CONECTAR, plays a crucial role as a
          facilitator and coordinator. By bridging the gap between home service
          providers and homeowners, We are instrumental in creating a harmonious
          and efficient ecosystem.
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
