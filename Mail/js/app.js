// # Email
// - Chiedo all'utente l'email e recupero tramite id il valore inserito

const emailDOMElement = document.getElementById('email');
const btnDOMElement = document.getElementById('send-email');
const responseDOMElement = document.querySelector('.response');

// - Dichiaro una variabile con un array delle email consentite
const allowedEmails = ['batman@ghotam.com', 'peterparker@spiderman.com', 'luffy@onepiece.com', 'tanjiro@demonslayer.com', 'gojo@satoru.jp', 'akame@nightraid.jp'];
console.log(allowedEmails);

const arrayLenght = allowedEmails.length;
console.log(arrayLenght);

// - Dichiaro un ciclo for che al click controllerà l'email inserita dall'utente se consente l'accesso
btnDOMElement.addEventListener('click', function(){
    const email = emailDOMElement.value;
    console.log(typeof(email),email, emailDOMElement);

    for(i = 0; i < arrayLenght; i++){
        if(email === allowedEmails[i]){
            
            responseDOMElement.innerHTML = 'Accesso Consentito'
            
        } else 
            responseDOMElement.innerHTML = 'Accesso Negato' 
        
    
        
    }
})