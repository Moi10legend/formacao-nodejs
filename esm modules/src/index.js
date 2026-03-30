//import connectToDatabase from "./utils/database.js";  Quando queremos importar só uma função
//import * as database from "./utils/database.js"; Quando queremos importar tudo.
import {connectToDatabase, disconnectToDatabase} from "./utils/database.js"; //Destructuring

connectToDatabase("DO melhor");