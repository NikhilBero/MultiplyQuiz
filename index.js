let num1 = Math.ceil(Math.random()*10);


let num2 = Math.ceil(Math.random()*10);

let scoreEl = document.getElementById("score")

let score =  JSON.parse(localStorage.getItem("score"));

if(!score){
   score = 0
}

scoreEl.innerText = `score ${score}`

const inputEl = document.getElementById("input");

const questionEl = document.getElementById("question");

questionEl.innerText = `What is ${num1} Mutiply by ${num2} ?`;

const formEl = document.getElementById("form")

const correctAns = num1*num2

formEl.addEventListener ("submit" , ()=> {

const userAns = +inputEl.value

 if( correctAns === userAns ){
    score++
    console.log(score)
    updatelocalstorage( )

    

 }else{
    score--
    console.log(score)
    updatelocalstorage( )
    
 }

})

function updatelocalstorage( ){

localStorage.setItem( "score" , JSON.stringify(score)
)

}
