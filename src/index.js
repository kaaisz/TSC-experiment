"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bear_model_1 = require("./bear.model");
// create instance of bear, which is having 3 claws
var bear = new bear_model_1.Bear(3);
// if the bear is the instanceof Bear
if (bear instanceof bear_model_1.Bear) {
    console.log("Hello from Typescript world!!");
}
