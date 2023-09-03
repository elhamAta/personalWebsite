import React ,{ useState } from "react";
import Button from "../Button/Button";


const Contacts = () =>{
    const [ name, setName] = useState();
    const [ phone, setPhone] = useState();
    const [ email, setEmail] = useState();
    const [ description, setDescription] = useState();
    const [ errors, setErrors] = useState({});/* useState object migire */

    const handleChangeInputText = (event) => {
        setName(event.target.value);
    }
    const handleChangeInputPhone = (event) => {
        setPhone(event.target.value);
    }
    /*Validation email */
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const handleChangeInputEmail = (event) => {
        if(validateEmail(event.target.value)){
            setEmail(event.target.value);
            setErrors({
                ...errors,/*value in errors*/ 
                email:null,
            })
        } else{
            setErrors({
                ...errors,
                email : 'email is not valid'
            })
        }
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }
    
    const handleSubmit = () => {
        console.log('name :',name);
        console.log('phone :',phone);
        console.log('email :',email);
        console.log('desc :',description);
    };
    return(
        <div className="container contact-page">
             <div class="form">
                <h1 className="title">
                    Contact with me
                </h1>
                <div class="formControl">
                    <label htmlFor="">Name</label>
                    <input type="text" class="txt" required 
                        onChange ={handleChangeInputText}
                    />
                </div>
                <div class="formControl">
                    <label htmlFor="">Phone number</label>
                    <input type="text" class="txt" required 
                         onChange ={handleChangeInputPhone}
                    />
                </div>
                <div class="formControl">
                    <label htmlFor="">Email</label>
                    <input type="text" class="txt" required 
                        onChange ={handleChangeInputEmail}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div class="formControl">
                    <label htmlFor="">Message</label>
                    <textarea class="txt" name="" id="" 
                        onChange ={handleChangeDescription} ></textarea>
                </div>
                <div class="formControl">
                    <Button handleClick={handleSubmit}>
                        Send
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Contacts