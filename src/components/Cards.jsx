import styles from "./styles/Cards.module.css"


function Cards({image, name, species, status, gender, origin, location}) {
    return (
       
    //    <div className="card">
    //     <img src={image} alt="" />
    //     <div className="text__card">
    //       <h4>{name}</h4>
    //       <p>Status: {status}</p>
    //       <p>Specie: {species}</p>
    //     </div>
    //   </div> 

        <div className="card">
            <img src={image} alt=""/>
            <div className="text__card">
                <h3>{name}</h3>
                <h3>Specie: {species}</h3>
                <h3>Status: {status}</h3>
                <h3>Gender: {gender}</h3>
                <h3>Origen: {origin?.name}</h3>
                <h3>Location: {location?.name}</h3> 
            </div>
        </div> 
    );
  }
  
  export default Cards;



