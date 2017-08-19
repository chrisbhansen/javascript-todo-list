var todos = [];
var input = prompt("What would you like to do?");

while (input !== "quit") {

	if (input === "list") {
		todos.forEach(function(todo){
			console.log(todo);
		})

	} else if (input === "new") {
		var newToDo = prompt("Enter new todo");
		todos.push(newToDo);
	}
	input = prompt("What would you like to do?");
}
console.log("Okay, quitting the app.");