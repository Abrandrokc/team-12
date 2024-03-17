const formEmail = document.getElementById('mail');
const formComment = document.getElementById('comment');
const maxLength = 45;
const backdrope = document.querySelector(".backdrope");
const buttonClose = document.querySelector(".button-close");
const form = document.querySelector("form")
 const errorMessage = document.getElementById('email-error');

let inputMail;
let inputComment;

formEmail.addEventListener('input', function(event)  {
  
 inputMail = event.target.value;

    if (inputMail.length > maxLength) {
        inputMail = `...${inputMail.substring(inputMail.length - maxLength)}`;
        event.target.value = inputMail;
        event.target.setSelectionRange(0, 0);
    } else if (inputMail.startsWith('...')) {
        event.target.value = inputMail.slice(3);
    }
    const input = event.target;
   

     if (!input.validity.valid) {
        errorMessage.classList.remove('success-input');
        errorMessage.classList.add('error-input');
        errorMessage.textContent = 'Invalid email, try again';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.classList.remove('error-input');
        errorMessage.classList.add('success-input');
        errorMessage.textContent = 'Succes!';
        errorMessage.style.display = 'block';
    }
});

formComment.addEventListener('input', function (event) {
   inputComment = event.target.value;
 if (inputComment.length > maxLength) {
        inputComment = `...${inputComment.substring(inputComment.length - maxLength)}`;
        event.target.value = inputComment;
        event.target.setSelectionRange(inputComment.length, inputComment.length);
    } else if (inputComment.startsWith('...')) {
        event.target.value = inputComment.slice(3);
    }
})

buttonClose.addEventListener("click", function () {
       backdrope.classList.remove('is-open');
});


// console.log(dataToSend)
form.addEventListener("submit", async event => {
    event.preventDefault();
    await sendDataToServer(); 
  
    backdrope.classList.add('is-open');
    formEmail.value = '';
    formComment.value = '';
   errorMessage.textContent = '';
    errorMessage.style.display = 'none'; 
});

async function sendDataToServer() {
    const formData = new FormData(form);
    const dataToSend = {
        "email": formData.get('mail'),
        "comment": formData.get('comment')
    };

    try {
        const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const responseData = await response.json();
        console.log(responseData); 
    } catch (error) {
        console.error('Error:', error);
    }
}
backdrope.addEventListener('click', function(event) {
    if (event.target === backdrope) {
        backdrope.classList.remove('is-open');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && backdrope.classList.contains('is-open')) {
        backdrope.classList.remove('is-open');
    }
});

