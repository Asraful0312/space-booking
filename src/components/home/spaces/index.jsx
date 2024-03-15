import Heading from "../../shared/Heading";
import SingleItem from "./SingleItem";

const Spaces = () => {
  return (
    <section className="mb-16">
      <div className="container">
        <Heading title="Newest Flexible Office Spaces" />
        <div className="grid mt-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
          {/*  grid items */}
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
        </div>
      </div>
    </section>
  );
};

export default Spaces;
