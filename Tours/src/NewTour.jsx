import React, { useState } from "react";

const NewTour = (item, removeTour) => {
  const { id, image, info, name, price } = item;

  const [readMore, setReadMore] = useState(true);

  return (
    <>
      <article key={id} className="all-article">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}
        <button type="button" className="btn" onClick={() => setReadMore(
          !readMore  
        )}>
            {readMore ? 'show less' : 'read More' }
        </button> 
        </p>
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </article>
    </>
  );
};

export default NewTour;
