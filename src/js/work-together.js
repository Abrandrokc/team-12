const formEmail = document.getElementById('mail');
const formComment = document.getElementById('comment');
const maxLength = 45;
const backdrope = document.querySelector(".backdrope");
const buttonClose = document.querySelector(".button-close");
const form = document.querySelector("form")
 const errorMessage = document.getElementById('email-error');

let inputMail;
let inputComment;

export function formEmailInput(event)   {
  
 inputMail = event.target.value;

    const input = event.target;
   
  
     if (!input.validity.valid) {
        errorMessage.classList.remove('success-input');
        errorMessage.classList.add('error-input');
        errorMessage.textContent = 'Invalid email, try again';
         errorMessage.style.display = 'block';
           setErrorStyle(formEmail); 
    } else {
        errorMessage.classList.remove('error-input');
        errorMessage.classList.add('success-input');
        errorMessage.textContent = 'Succes!';
         errorMessage.style.display = 'block';
         setSuccessStyle(formEmail); 
         
    }

    function setSuccessStyle(formEmail) {
    formEmail.classList.remove('error'); 
        formEmail.classList.add('success'); 
}
  
function setErrorStyle(formEmail) {
    formEmail.classList.remove('success');
    formEmail.classList.add('error');
}

};


export function formCommentlInput(event)  {
    inputComment = event.target.value;
    
    
};

export function closeModalWindow(event)  {
       backdrope.classList.remove('is-open');
};


// console.log(dataToSend)
export async function submitForm(event) {
    event.preventDefault();
    await sendDataToServer(); 


    formEmail.value = '';
    formComment.value = '';
    errorMessage.textContent = '';
    errorMessage.style.display = 'none'; 
    formEmail.classList.remove('success');
    formEmail.classList.remove('error');
}

async function sendDataToServer() {
    const formData = new FormData(form);
     const dataToSend = {
        "email": inputMail, 
        "comment": inputComment 
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    };
    try {
        const response = await fetch('https://portfolio-js.b.goit.study/api/requests', options);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const responseData = await response.json();
        console.log(responseData); 
        backdrope.classList.add('is-open');
        
    } catch (error) {
        console.error('Error:', error);
        alert('Error! Try again');
        
             }
}

    
export function backdropeClose(event) {
    if (event.target === backdrope) {
        backdrope.classList.remove('is-open');
    }
};
export function escapeClose(event) {
    if (event.key === 'Escape' && backdrope.classList.contains('is-open')) {
        backdrope.classList.remove('is-open');
    }
};



