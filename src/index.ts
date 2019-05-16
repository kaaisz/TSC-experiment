import { Bear } from './bear.model';

// create instance of bear, which is having 3 claws
const bear = new Bear(3)

// if the bear is the instanceof Bear
if(bear instanceof Bear) {
  console.log("Hello from Typescript world!!");
}
