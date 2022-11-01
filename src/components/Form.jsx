import React from 'react'
//importação da biblioteca do react recaptcha 
import ReCAPTCHA from "react-google-recaptcha";

//Style
import '../styles/components/form.css'

const Form = () => {
    function onChange(value) {
        console.log("Captcha value:", value);
    }     
  return (
    /*Formnulario com inputs*/
    <div className='finalContainer'>
        <h1 className='text'>Set ut perspiciatis unde</h1>
        <form>
            <div className='input'>
                <input type="text" name='email' placeholder='Digite seu melhor email'/>
            </div>
            <div className='input'>
            <input type="name" required="required" name="text" pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$" placeholder='Nome'/>
            </div>
            <div className='input'>
                <input type="text" name='empresa' placeholder='Empresa' required="required"pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"/>
            </div>
            <div className='input'>
                <input type="text" name='assunto' placeholder='Assunto'/>
            </div>
            <div className='input3'>
                <input type="text" name='assunto'/>
            </div>
            <input className='button' type="submit" value={"enviar"}/>
        </form>
        {/* Div que contem o recaptch */}
        <div className='recaptch'>
        <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"onChange={onChange}/>,
        </div>      
    </div>
  )
}

export default Form