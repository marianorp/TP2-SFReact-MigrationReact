// import Api from "./api";
// import Form from "./Form";
// import User from "./users";
// import "../styles/home.css";
// import home from "../img/home.jpg";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import styles from "./styles/Home.module.css"
import buttoncards from "../images/buttoncards.jpg";
import buttontable from "../images/buttontable.jpg";
import buttoncontact from "../images/buttoncontact.jpg";


function Home() {
  return (

    <div className={styles.container}>
        <h1 className={styles.title}> TRABAJO PRACTICO Nº2 MIGRACION A REACT</h1>
        <div className={styles.buttons}>
            <div className={styles.Cards}>
                <Link to={"/cards"}>
                    <div className={styles[`img-cards`]}>
                        <img src={buttoncards} alt=""/>
                    </div>
                    <span>Rick and Morty Cards</span>
                </Link>
            </div>
            <div className={styles.Table}>
                <Link to={"/table"}>
                    <div id="img-table">
                        <img src={buttontable} alt=""/>
                    </div>
                    <span>Json Table</span>
                </Link>
            </div>
            <div className={styles.Form}>
                <Link to={"/form"}>
                    <div id="img-form">
                        <img src={buttoncontact} alt=""/>
                    </div>
                    <span>Contact Form</span>
                </Link>
            </div>
        </div>
        <footer><h2>Realizado por Perez Mariano 2022</h2></footer>
    </div>
  );
}

export default Home;
