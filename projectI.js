// Project I: Todo Manager
// -----------------------
// Complete the Todo Manager. Start by defining all the methods that you'll need 
// and take a look at the sample usage. Start by writing the name of the functions 
// without an empty body.

class TodoManager {
    /**
     * @param {Object[]} todos
     * @param {string} todos[].title
     * @param {boolean} todos[].is_completed
     */
    constructor(todos) {
        this.todos = todos;
    }
    add(todo){// add support for default is_completed
        const defaultOptions = {
            is_completed: false,
        };
        let merged = {...defaultOptions,...todo} 
        this.todos.push(merged);
        return this.todos;
    }
    getCompleted(){
        return this.todos.filter(todo => todo.is_completed === true);
    }
    getPending(){
        return this.todos.filter(todo => todo.is_completed ==! true);        
    }
    getFirst(){
        return this.todos.splice(0,1)[0];
    }
    getLast(){
        return this.todos.splice(this.todos.length-1,this.todos.length)[0];
    }
    getCount(){
        return this.todos.length;
    }
    markAsCompleted(title){
        this.todos.forEach(todo => {
		if (todo.title === title){
		    todo.is_completed = true;
		}
	    });
        return this.todos;
    }
    allCompleted(){
        return this.todos.every(todo => todo.is_completed === true)
	    }
    allPending(){
        return this.todos.every(todo => todo.is_completed === false)
	    }
    exportCsv(){
        return this.todos.map(todo => todo.title).join(", ")
	    }
}

//sample usage
const initialTodos = [{
	title: "Learn JavaScript",
	is_completed: true
    }, {
	title: "Practice flashcards",
	is_completed: false
    }];
const todoManager = new TodoManager(initialTodos);

console.log(todoManager.getCompleted()); //returns completed todos
console.log(todoManager.getPending()); //returns todos that are not completed
console.log(todoManager.getFirst());
console.log(todoManager.getLast());
console.log(todoManager.getCount());
todoManager.markAsCompleted("Practice flashcards");
todoManager.add({
	title: "Recap flashcards",
	    is_completed: true
	    });
//when is_completed is not defined, it should default to false
todoManager.add({
	title: "Get some rest"
	    });
console.log(todoManager.allCompleted()); //returns true when all todo items are completed
console.log(todoManager.allPending()); //returns true when all todo items are pending
console.log(todoManager.exportCsv()); //returns "Learn JavaScript, Practice flashcards"
