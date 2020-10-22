import { LightningElement } from 'lwc';

export default class TrackDecoratorExample extends LightningElement {

    Name = 'Akash Kumar';
    changeHandler(event) {
    this.greeting = event.target.value;
  }
}