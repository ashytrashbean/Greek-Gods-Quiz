
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

// Dropdown bookmark

const bookmark = document.getElementById('bookmarks');
if(bookmark){
    bookmark.addEventListener('change', function(){
    const quizId = this.value;

    if(quizId && quizId !== 'Skip to question...'){
        window.location.hash = quizId;

        this.selectedIndex = 0;
    }
});
}


// The quiz objs

const grade = document.querySelector('#grade');


const submitBtn = document.querySelector('#submit-quiz');

// Grading button that prints the feedback
submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    let score = 0;
    const totalScore = 22;

    function correctionFeedback(obj){
    if(obj.value === '0'){
            obj.parentElement.style.backgroundColor ='green';
            obj.parentElement.style.color ='white';

            // Shows the feedback text
            obj.parentElement.nextElementSibling.style.display = 'block';
            obj.parentElement.nextElementSibling.style.backgroundColor = 'green';
            obj.parentElement.nextElementSibling.style.color = 'white';

            score++
        } 
        else{
            obj.parentElement.style.backgroundColor ='red';
            obj.parentElement.style.color ='white';

            obj.parentElement.nextElementSibling.style.display = 'block';
            obj.parentElement.nextElementSibling.style.backgroundColor = 'red';
            obj.parentElement.nextElementSibling.style.color = 'white';
        }
}


    // Correcting each of the checked elements and showing each questions feedback
    document.querySelectorAll('[type=radio]:checked').forEach(rad=>{correctionFeedback(rad);});
    document.querySelectorAll('[type=checkbox]:checked').forEach(check=>{correctionFeedback(check)});

    // Grading animation reset
    document.querySelectorAll('.result-animation').forEach(element => {element.classList.remove('show')});

    
    // Grading 
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

     // Display the Garding Animation
    if (resultElementId) {
        const animationElement = document.getElementById(resultElementId);
        animationElement.classList.add('show');
    }

})