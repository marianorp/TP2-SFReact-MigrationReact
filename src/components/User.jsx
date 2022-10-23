import { useState, useEffect } from "react";
import styles from "./styles/User.module.css"
import Table from "./Table";


function User() {

  const [data, setData] = useState([]);

  useEffect(() => {

    async function api() {
      
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const datos = await res.json();

      setData(datos);

      return datos;
    }

    api();

  },[]);


  return (
   
    <div className={styles.container_user}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Phone</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, index) => (
              <Table
                key={index}
                id={e.id}
                name={e.name}
                email={e.email}
                address={e.address.city}
                phone={e.phone}
                company={e.company.name}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
