import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'Harsh';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}