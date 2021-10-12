
const Button = (value, input) =>{
    
    
    let button = document.createElement('button');
    button.appendChild(document.createTextNode(value));
    
    
    button.addEventListener('click' , function(event){
        input.value += event.target.innerHTML;
        
    })
    return button;
    
};

const ResultButton = (input) =>{
    let resultButton = document.createElement('button');
    resultButton.appendChild(document.createTextNode('='));
    resultButton.addEventListener('click', function(){

    let inputArray = input.value.split(" ");
     
    inputArray[0] = parseFloat(inputArray[0]);
    inputArray[2] = parseFloat(inputArray[2]);

    
        
        console.log(inputArray)
        
        
        for (let k=0; k < inputArray.length; k++){
            if(inputArray[k] == '*'){
                    let before1 = inputArray[k - 1];
                    let after1 = inputArray[k + 1];
                    let result1 = before1 * after1;
                    console.log(result1)
            //Чтоб не забыть это просто эксперимент
                if((inputArray[k - 1] * inputArray[k + 1]) == result1){
                    inputArray[k] = result1;
                    console.log(inputArray[k])
                    if(inputArray[k + 1] == '+'){ 
                    
                    input.value = result1 + +inputArray[k + 1];        
                    }
                    else if(inputArray[3] == '-'){
                    input.value = result1 - inputArray[k + 1];
         
                    }else if(inputArray[1] == '*' || inputArray[3] == '*'){
                    input.value = result1 * inputArray[k + 1];
                    }else if(inputArray[3] == '/'){
                    input.value = result1 / inputArray[k + 1];
                    }
                    
         
                    
                    }
                    if(input.value.includes('+')){ 
                    
                    input.value = inputArray[0] + result1;        
                    }else if(inputArray[1] == '-'){
                    input.value = inputArray[0] - result1;
         
                    }else if(inputArray[1] == '*'){
                    input.value = inputArray[0] * result1;
         
                    }else if(inputArray[1] == '/'){
                    input.value = inputArray[0] / result1;
         
                    }   
                    }
        }
            
//        !!!!!!!!!!!!!!!!!!!!!!!!!!!
            for (let i = 0; i < inputArray.length; i++) {
         if(inputArray[i] == '/'){
            let before = inputArray[i - 1];
            let after = inputArray[i + 1];
            let result = before / after;
                 console.log (result)
                 if((inputArray[i - 1] / inputArray[i + 1]) == result){
                    inputArray[i] = result;
                    console.log(result)
                    if(inputArray[3] == '+'){ 
                    
                    input.value = result + +inputArray[4];         
                    }
                    else if(inputArray[3] == '-'){
                    input.value = result - inputArray[4];
         
                    }else if(inputArray[1] == '*' || inputArray[3] == '*'){
                    input.value = result * inputArray[4];
                    }else if(inputArray[3] == '/'){
                    input.value = result / inputArray[4];
                    }
                    
         
                    
                    } 
             
                if(input.value.includes('+')){ 
           
                    input.value = inputArray[0] + result;        
                }else if(inputArray[1] == '-'){
                    input.value = inputArray[0] - result;
         
                }else if(inputArray[1] == '*'){
                    input.value = inputArray[0] * result;
         
                }else if(inputArray[1] == '/'){
                    input.value = inputArray[0] / result;
         
                }   
                } 
                } 
        
//      console.log(inputArray); 
    if(input.value.includes('+')){ 
           
         input.value = inputArray[0] + inputArray[2];        
     }else if(inputArray[1] == '-'){
         input.value = inputArray[0] - inputArray[2];
         
     }else if(inputArray[1] == '*'){
         input.value = inputArray[0] * inputArray[2];
         
     }else if(inputArray[1] == '/'){
         input.value = inputArray[0] / inputArray[2];
         
     }        
  

    });
    
    return resultButton;
    
}

const form = () => {
    let input = document.createElement('input');
  
    let div = document.createElement('div');
    div.setAttribute('id' , 'mainDiv');
    div.className = 'root';
    
    div.appendChild(Button('1',input));
    div.appendChild(Button('2',input));
    div.appendChild(Button('3',input));
    div.appendChild(Button('4',input));
    div.appendChild(Button('5',input));
    div.appendChild(Button('6',input));
    div.appendChild(Button('7',input));
    div.appendChild(Button('8',input));
    div.appendChild(Button('9',input));
    div.appendChild(Button('0',input));
    div.appendChild(Button(' + ',input));
    div.appendChild(Button(' - ',input));
    div.appendChild(Button(' * ',input));
    div.appendChild(Button(' / ',input));
    let resButton = ResultButton(input);
    div.appendChild(resButton);
    div.appendChild(input);
    return div;
    
};



const App = () =>{
    let content = form();
    const root = document.getElementById('root');
    root.innerHTML = ' ';
    root.appendChild(content);
}

App();