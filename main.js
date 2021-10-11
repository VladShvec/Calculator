
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
//        if(input.value.includes('+')){
//            
//        }
    let inputArray = input.value.split(" ");
        
    inputArray[0] = parseFloat(inputArray[0]);
    inputArray[2] = parseFloat(inputArray[2]);
//    if(inputArray[1] == '+'){
     

    inputArray = inputArray.map(function(smb, key) {
        let res;    
        if (smb == '/' ){ 
            let before = inputArray[key - 1];
            let after = inputArray[key + 1];
             res = before / after;
              
               
        }; 
//        res = smb; 
        console.log(res)
          return smb; 
              
      });    
    
      
        
    
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
  
//    console.log(input.value);    
//    console.log(typeof Number(inputArray));    
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