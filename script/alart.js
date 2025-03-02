
let classs = document.querySelectorAll('.Royel');

let one = document.getElementById("one").innerText;
let fixone =parseInt(one);
console.log(typeof fixone);

let two = document.getElementById("two").innerText;
let fixtwo = parseInt(two);
console.log(typeof fixtwo);

let fakabox =document.getElementById("faka");

  for (let button of classs){
        console.log(button);
     button.addEventListener("click",function(event){ 
        alert("Board update successfully")

       
        let sum= fixone --  ;
        document.getElementById("one").innerText = sum;
        let sum2 = fixtwo ++ ;
        document.getElementById("two").innerText =sum2;
        // event.target.button = "disable"
        event.target.disabled  = true;
        
        // const input = document.getElementById("faka");
        
        const container = document.getElementById("container");
        const comentElemn= document.createElement("p");
        comentElemn.innerHTML ='You have complete the task at' + new Date();
         
        container.appendChild(comentElemn);

        // document.getElementById("faka").innerHTML = 'You have complete the task at' + new Date();
        

        


       
        // event.target.classList.add ("p");
       

        
})  
  
    }
    function clearText() {
        document.getElementById("container").textContent = "";
    }
 
   
    


// let x= document.querySelectorAll(classs).addEv