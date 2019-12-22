
const login = window.document.querySelector('#login');
login.addEventListener('click',InisioSesion);

function InisioSesion(){

    const inputMAil = window.document.querySelector('#mail');
    const inputPass = window.document.querySelector('#pass');
    
    
    let vMail = (inputMAil.value);
    let vPass = (inputPass.value);
   
 
    if (vMail ==='ejemplo@gmail.com' && vPass ==='123456'){

        console.log("Inisiando sesion....")
    }
    else{
        console.log("Email y/o Contraseña incorrectos")
        console.log(inputMAil.value)
    }

}

