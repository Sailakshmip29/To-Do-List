let inputBox = document.getElementById('inputbox');
let listContainer = document.getElementById('lists');

function addTask() {
    if(inputBox.value === ''){
        alert("Enter your task");
    }else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

       var checked = li.addEventListener('click', function(){
            li.style.textDecoration = "line-through";
            li.style.textDecorationColor = "red";
            li.style.textDecorationThickness = "2px";
        })
        li.addEventListener('dblclick', function(){
            li.style.textDecoration = "none";
        })

        let span = document.createElement('span');
        span.innerHTML = "x";
        li.appendChild(span);

    }
    inputBox.value = '';

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle(checked)
        }else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove();
        }
    })
}


