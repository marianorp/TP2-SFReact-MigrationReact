import styles from "./styles/Form.module.css"


function Form() {
    return (

    <div className={styles.container}>

        <div className={styles.form_container}>
        
            <form id="form" class="form">

                <div className={styles.control}>
                    <label for="username">Name</label>
                    <input type="text" placeholder="John Doe" id="name" />
                    <i class="check"></i>
                    <i class="wrong"></i>
                    <small>Error message</small>
                </div>

                <div className={styles.control}>
                    <label for="username">Email</label>
                    <input type="email" placeholder="example@gmail.com" id="email"/>
                    <i class="check"></i>
                    <i class="wrong"></i>
                    <small>Error message</small>
                </div>

                <div className={styles.control}>
                    <label for="username">Message</label>
                    <textarea type="message" placeholder="Write your message here" id="message"></textarea>
                    <i class="check"></i>
                    <i class="wrong"></i>
                    <small>Error message</small>
                </div>
                
                <button onclick="getData()">Submit</button>
            </form> 
        </div>

    </div>

       
    );
  }
  
  export default Form;