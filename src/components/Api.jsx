import { useEffect, useState } from "react";
import Cards from "./Cards";
import styles from "./styles/Api.module.css";


function Api() {

  const [data, setData] = useState([])

  useEffect(() => {

    const rickAndMorty = fetch("https://rickandmortyapi.com/api/character")
    
    rickAndMorty

      .then((data) => data.json())
      .then((data) => setData(data.results))
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.title}>
          <h1>Rick and Morty Cards</h1>
        </div>
        <div className="cards">
          {data.length !== 0 ? data.map((e) => <Cards image={e.image} name={e.name} status={e.status} species={e.species} gender={e.gender} origin={e.origin} location={e.location} />) : null}
        </div>   
        {/* <div class="arrow-button">
            <a href=""><span class="fas fa-angle-up"></span></a>
        </div> */}

    </div>

  );
}

export default Api;
