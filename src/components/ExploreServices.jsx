import classes from "./ExploreServices.module.css";

const ExploreServices = () => {
  return (
    <div className={classes["explore-wrapper"]}>
      <h3>Explore all our HOME SERVICES</h3>
      <div className={classes["explore-background"]}></div>
      <div className={classes.grid}>
        <a href="/">HAIRDRESSING</a>
        <a href="/">BARBING</a>
        <a href="/">PLUMBING</a>
        <a href="/">HOUSE CLEANING</a>
        <a href="/">PAINTING</a>
        <a href="/">LAUNDRY</a>
        <a href="/">ELECTRICAL</a>
        <a href="/">CARPENTRY</a>
        <a href="/">GARDENER</a>
        <a href="/">PAINTING</a>
        <a href="/">MAKE-UP</a>
        <a href="/">AC INSTALLATION</a>
      </div>
    </div>
  );
};

export default ExploreServices;
