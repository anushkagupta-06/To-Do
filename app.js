let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function() {
     let task=document.createElement("li");              //adding a task as list
     task.innerText=inp.value;
     ul.appendChild(task);
     inp.value="";
     let delbt=document.createElement("button");         //adding a delete button
     delbt.innerText="Delete";
     delbt.classList.add("delete");
     task.appendChild(delbt);
})

//making delete button work

ul.addEventListener("click",function(event){
     if(event.target.nodeName=="BUTTON"){
        let delItem=event.target.parentElement;
        delItem.remove();
        console.log("Deleted");
     }
})
