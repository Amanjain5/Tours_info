import { useEffect, useState } from "react";
import Loading from "./Loading";

import "./App.css";
import Tours from "./Tours";

function App() {
  const [isLoading, setIsLoading] = useState();
  const [tour, setTour] = useState();

  const removeTour = (id) => {
    const newTour = tour && tour.filter((item) => item.id !== id)
    setTour(newTour);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://course-api.com/react-tours-project",
      );
      const tours = await response.json();
      setTour(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return <Tours tour={tour} removeTour={removeTour} />;
}

export default App;
