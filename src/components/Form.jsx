import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";

//Style
import '../styles/components/form.css'

const Form = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }     
  return (
    <div className='finalContainer'>
        <h1 className='text'>Set ut perspiciatis unde</h1>
        <form>
            <div className='input'>
                <input type="text" name='email' placeholder='Digite seu melhor email'/>
            </div>
            <div className='input2'>
                <input type="name" name='name' placeholder='Nome'/>
                <input type="text" name='empresa' placeholder='Empresa'/>
            </div>

            <div className='input'>
                <input type="text" name='assunto' placeholder='Assunto'/>
            </div>
            <div className='input3'>
                <input type="text" name='assunto'/>
            </div>
            <input className='button' type="submit" value={"enviar"}/>
        </form>
        <div className='recaptch'>
        <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"onChange={onChange}/>,
        </div>      
    </div>
  )
}

export default Form