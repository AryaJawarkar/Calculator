let string = "";
let buttons = document.querySelectorAll('.num');
document.getElementById("result").readOnly = true;

Array.from(buttons).forEach((num)=>{
   num.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
       
        string = eval(string);
        document.getElementById('result').innerHTML = + string;
    } 
    else if(e.target.innerHTML == 'AC'){
        string = "";
        document.getElementById('result').innerHTML = string;
    }
    else if(e.target.innerHTML == 'DEL'){
        string = string.slice(0,-1);
        document.getElementById('result').innerHTML = string;
    }
    else{
        console.log(e.target);
string = string + e.target.innerHTML;
document.getElementById('result').innerHTML = string;
}
    })

    

})

