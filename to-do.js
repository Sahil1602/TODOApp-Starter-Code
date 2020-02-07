console.log("file loaded");

var todoInput = document.getElementById('form-input');

// todoInput.addEventListener('input', function(e){
//     var inputField = e.target;
//     console.log(inputField.value);
//     e.preventDefault();
// })

var todoForm = document.getElementById('todo-form');
todoForm.onsubmit = function(e){
    e.preventDefault();
}



{/* <div class="todo-item">
    <h3 class="added-message">Buy Books</h3>
</div> */}
var todoContainer = document.getElementById('container');


var createTodoCard = function(input){
    var todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    var todoMessage = document.createElement('h3');
    todoItem.appendChild(todoMessage);
    todoMessage.innerHTML = input;

    return todoItem;
} 

var cardContainer = document.getElementById('todo-cards');

todoInput.onkeyup = function(e){
    if(e.key === 'Enter'){
        
        var eInputValue = e.target.value;
        if(eInputValue !== ''){
            console.log('enter clicked');
            cardContainer.insertBefore(createTodoCard(eInputValue), cardContainer.firstElementChild);
        }
        e.target.value = '';
    }
}


var saveButton = document.getElementById('save');

saveButton.onclick = function(){
    
    var inputValue = todoInput.value;
    if(inputValue !== ''){
        cardContainer.insertBefore(createTodoCard(inputValue), cardContainer.firstElementChild);
    }
    todoInput.value = '';
}





