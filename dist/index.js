"use strict";
/**
 *  bvalidation of 3 types of data
 *
 *  title : required
 * description required bmin :5 max : 30
 * people : number not equal to 0 and required
 * @param validated
 */
function validate(validated) {
    let isValid = true;
    if (validated.required) {
        isValid = isValid && validated.value.toString().trim().length !== 0;
    }
}
class Render {
    constructor() {
        this.templateHTML = document.getElementById('project-input');
        this.ElementHost = document.getElementById('app');
        const nodeHost = document.importNode(this.templateHTML.content, true);
        this.element = nodeHost.firstElementChild;
        this.element.id = 'user-input';
        this.titleInput = this.element.querySelector('#title');
        this.descriptionInput = this.element.querySelector('#description');
        this.peopleInput = this.element.querySelector('#people');
        console.log(this.titleInput);
        console.log(this.descriptionInput);
        console.log(this.peopleInput);
        this.render();
        this.configure();
        // this.fetchData();
    }
    render() {
        this.ElementHost.insertAdjacentElement('afterbegin', this.element);
    }
    configure() {
        this.element.addEventListener('submit', this.handleSubmit.bind(this));
    }
    fetchData() {
        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        const people = this.peopleInput.value;
        if (title.trim().length === 0 || description.trim().length === 0 || people.trim().length === 0) {
            alert('Something is wrong');
            return;
        }
        else {
            return [title, description, +(people)];
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const data = this.fetchData();
        console.log(data);
    }
}
const render = new Render();
