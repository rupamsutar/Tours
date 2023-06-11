import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = id => {
    setTours(tours.filter((tour) => tour.id !== id));
  }

  const fetchTours = async() => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false)
  }


  useEffect(() => {
    fetchTours();
  },[])


  if (isLoading) {
    return (
      <main>
        <Loading />        
      </main>
    )
  }


  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
};
export default App;
