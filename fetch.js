let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
// get number everytime theres certain input
numberInput.addEventListener('input', getFactFetch);


    function getFactFetch(){
        let number  = numberInput.value;
        fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data=>{
             if(number != ''){
            fact.style.display = 'block';
            factText.innerText = data;
        }
        
        })
        .catch(err => console.log(err))
    }
