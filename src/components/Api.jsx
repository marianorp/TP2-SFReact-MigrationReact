import { useEffect, useState } from "react";
import Cards from "./Cards";
// import fondo from "../img/rick-y-morty-retrowave-synthwave_7680x4320_xtrafondos.com.jpg";
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
    // <div>
    //   <header>
    //     <Link to="/home">
    //       <button className="boton__back">BACK</button>
    //     </Link>
    //   </header>{" "}
    //   <div className="rick" id="rick">
    //     {data.length !== 0 ? data.map((e) => <Cards image={e.image} name={e.name} status={e.status} species={e.species} />) : null}
    //   </div>
    //   <div className="fondo__home">
    //     <img className="img__fondo" src={fondo} alt="" />
    //   </div>
    // </div>


    <div className={styles.container}>
    
        <h1>Rick and Morty Cards</h1>
        <div id="fetch-cards">
        {data.length !== 0 ? data.map((e) => <Cards image={e.image} name={e.name} status={e.status} species={e.species} />) : null}
        </div>   
        <div class="arrow-button">
            <a href="#"><span class="fas fa-angle-up"></span></a>
        </div>

    </div>


  );
}

export default Api;
