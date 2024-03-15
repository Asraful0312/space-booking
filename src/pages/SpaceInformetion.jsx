import Banner from "../components/space informetion/Banner";
import Detail from "../components/space informetion/Detail";
import Reviews from "../components/space informetion/reviews";
import Map from "../components/space informetion/Map";

const SpaceInformetion = () => {
  return (
    <section className="mb-12">
      <div className="container">
        <Banner />
        <Detail />
        <Reviews />
        <Map />
      </div>
    </section>
  );
};

export default SpaceInformetion;
