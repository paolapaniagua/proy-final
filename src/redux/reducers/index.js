import { combineReducers } from "redux";
import recipes from "./recipes";
import chefs from "./chefs";
import galeriaFotos from "./galeriaFotos";

export default combineReducers({ recipes, chefs,galeriaFotos});
