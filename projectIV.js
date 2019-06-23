// Project IV
// ----------
// NOTE: this doesn't work with node.js yet

class TodoItem extends HTMLElement {
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        const template = document.querySelector("#todo-template");
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        // Example: <todo-item title="Learn JavaScript course"
        // is-completed="true"></todo-item>
        const title = this.getAttribute("title")
	    const status = this.getAttribute("is-completed");
        console.log(`title = "${title}"`);
        console.log(`status = "${status}"`);
        // Template:
        // <h2 id="title"></h2>
        // <p>This task is <span id="status"></span></p>
        this.shadowRoot.querySelector("#title").textContent = title;
        if (status === "true"){
            this.shadowRoot.querySelector("#status").textContent = "completed" 
		} else {
            this.shadowRoot.querySelector("#status").textContent = "pending" 
		}      
    }
}
