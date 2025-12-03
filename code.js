
// light och dark mode switch
let toggler = document.getElementById('switch');

let quizDiv = document.querySelectorAll('.quiz');

toggler.addEventListener('click', ()=>{
    quizDiv.forEach(div =>{
        if(toggler.checked === true){
            div.style.backgroundColor = '#252525';
            div.style.color = '#fae8dd';
        }else{
            div.style.backgroundColor = '#fae8dd';
            div.style.color = 'black';
        }
    });
    
})

// själva quizet objekt

let quiz = document.querySelectorAll('.quiz');
let options = document.querySelectorAll('.answers');

const grade = document.querySelector('#grade');



let lable = document.querySelectorAll('lable');

const submitBtn = document.querySelector('#submit-quiz');


// utskrivningen av alla svar
submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    let score = 0;
    const totalScore = 22;

    
    let radio = document.querySelectorAll('[type=radio]:checked');
    let checkbox = document.querySelectorAll('[type=checkbox]:checked');

    radio.forEach(answ=>{
        if(answ.value === '0'){
            answ.parentElement.style.backgroundColor ='green';
            answ.parentElement.style.color ='white';

            // Shows the feedback text
            answ.parentElement.nextElementSibling.style.display = 'block';
            answ.parentElement.nextElementSibling.style.backgroundColor = 'green';
            answ.parentElement.nextElementSibling.style.color = 'white';

            score++
        } 
        else{
            answ.parentElement.style.backgroundColor ='red';
            answ.parentElement.style.color ='white';

            answ.parentElement.nextElementSibling.style.display = 'block';
            answ.parentElement.nextElementSibling.style.backgroundColor = 'red';
            answ.parentElement.nextElementSibling.style.color = 'white';
        }
    });

    checkbox.forEach(answ=>{
        if(answ.value === '0'){
            answ.parentElement.style.backgroundColor ='green';
            answ.parentElement.style.color ='white';

            // Shows the feedback text
            answ.parentElement.nextElementSibling.style.display = 'block';
            answ.parentElement.nextElementSibling.style.backgroundColor = 'green';
            answ.parentElement.nextElementSibling.style.color = 'white';

            score++
        } 
        else{
            answ.parentElement.style.backgroundColor ='red';
            answ.parentElement.style.color ='white';

            answ.parentElement.nextElementSibling.style.display = 'block';
            answ.parentElement.nextElementSibling.style.backgroundColor = 'red';
            answ.parentElement.nextElementSibling.style.color = 'white';
        }
    });

    document.querySelectorAll('.result-animation').forEach(el => {
        el.classList.remove('show');
    });

    let resultElementId = '';



    let percentage = (score/totalScore) * 100;
    if(percentage >= 75){
        grade.innerText = `You scored: ${score}/${totalScore}. You are amazing! Good Job!`;
        grade.style.backgroundColor ='lightgreen';
        resultElementId= 'excellent';
    }else if (percentage >= 50){
        grade.innerText = `You scored: ${score}/${totalScore}. You did ok`;
        grade.style.backgroundColor ='yellow';
        resultElementId= 'good';
    }else{
        grade.innerText = `You scored: ${score}/${totalScore}. You failed. You are terrible at greek gods`;
        grade.style.backgroundColor ='tomato';
        resultElementId= 'bad';
    }

     // --- Display the Chosen Animation ---
    if (resultElementId) {
        const animationElement = document.getElementById(resultElementId);
        
        animationElement.classList.add('show');

    }

})