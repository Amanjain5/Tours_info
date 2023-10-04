import React from "react";
import NewTour from "./NewTour";

const Tours = ( tour, removeTour ) => {
  return (
    <>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="title-underline"></div>
        </div>
        <div className="tours">
          { tour.tour &&
            tour.tour.map((item) => (
              <NewTour key={item.id} {...item} removeTour={removeTour} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Tours;
