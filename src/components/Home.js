import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes';
import galeriaFotos from '../redux/reducers/galeriaFotos';
import Recipes from './Recipes';
import ReactMarkdown from 'react-markdown';
import { connect } from "react-redux";


export const Home = () => {
    return(
        <div>
        <h1>Our Recipes:</h1>
            <section>
                <Recipes/>
            </section>
        <hr/>

        <h1>Our favourites ingredients:</h1>


        </div>
    ) 
}