import classes from "./PopularServices.module.css";

const PopularServices = ({ services }) => {
  return (
    <div className={classes["popular-section"]}>
      <h3>Popular Services</h3>
      <div className={classes["services-wrapper"]}>
        {services.map((service, index) => (
          <div key={index} className={classes["inner-wrapper"]}>
            <img src={service.image} alt="" />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularServices;
