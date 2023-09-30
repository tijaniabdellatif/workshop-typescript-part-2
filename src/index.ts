


type UserTypes = [string,string,number];

interface Validation {

    value:string | number,
    required?: boolean,
    minLength?:number,
    maxLength?:number,
    min?:number,
    max?:number


}


/**
 *  bvalidation of 3 types of data 
 * 
 *  title : required 
 * description required bmin :5 max : 30
 * people : number not equal to 0 and required
 * @param validated 
 */

function validate(validated: Validation){

        let isValid = true;
    if(validated.required){


        isValid = isValid && validated.value.toString().trim().length !== 0;


    }


}






class Render {


    templateHTML:HTMLTemplateElement;
    ElementHost:HTMLDivElement;
    element: HTMLFormElement;
    titleInput : HTMLInputElement;
    descriptionInput : HTMLInputElement;
    peopleInput : HTMLInputElement;

    constructor(){
        this.templateHTML = document.getElementById('project-input') as HTMLTemplateElement;
        this.ElementHost = document.getElementById('app') as HTMLDivElement;
        const nodeHost  = document.importNode(this.templateHTML.content,true)
        this.element = nodeHost.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInput = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInput = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInput = this.element.querySelector('#people') as HTMLInputElement;


        console.log(this.titleInput);
        console.log(this.descriptionInput);
        console.log(this.peopleInput);
        this.render();
        this.configure();

        // this.fetchData();
    }

    private render(){
        this.ElementHost.insertAdjacentElement('afterbegin',this.element);
    }


    private configure(){

          this.element.addEventListener('submit',this.handleSubmit.bind(this));
    }


    private  fetchData():UserTypes | void {


        const title = this.titleInput.value;
        const description = this.descriptionInput.value;
        const people = this.peopleInput.value;

        if(title.trim().length === 0 || description.trim().length === 0 || people.trim().length === 0 ){


                alert('Something is wrong');
                return;
        }

        else {

        
            return [title,description,+(people)]
        }




    }



    private handleSubmit(e:Event){

        e.preventDefault();
        const data = this.fetchData();
        console.log(data);
        

        

    }



}


const render = new Render();

