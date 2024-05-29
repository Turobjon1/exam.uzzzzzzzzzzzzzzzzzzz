let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let box = document.getElementById('box')
let word = document.getElementById('word')



input1.style.borderRadius = '5px'
input1.style.width = '300px'
input2.style.width = '300px'
btn.style.width = '300px'
btn2.style.width = '300px'
input2.style.borderRadius = '5px'
btn.style.borderRadius = '5px'
btn2.style.borderRadius = '5px'
btn.style.backgroundColor = 'grey'
btn2.style.backgroundColor = 'grey'
btn.style.color = 'white'
btn2.style.color = 'white'
btn2.style.height = '25px'




btn.addEventListener('click', () => {
    if (input1.value == 'mmm' && input2.value == '123mmm'  ) {
        alert(`siz ro'yhatdan otdingiz`)
        btn.style.display = 'none';
        input1.style.display = 'none';
        input2.style.display = 'none';
        word.style.display = 'none';
    } else {
        alert('username yoki parol xato')
        // box.style.display = 'none'

    }
    

    
})

function addQuestion() {
    let question = prompt("Iltimos, savolingizni kiriting:");
    if (question) {
        let questionsContainer = document.getElementById('questions');
        let newQuestion = document.createElement('div');
        newQuestion.textContent = question;
        questionsContainer.appendChild(newQuestion)
    }
}

