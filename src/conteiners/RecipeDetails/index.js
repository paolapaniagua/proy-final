import React from 'react';
import ReactMarkdown from 'react-markdown';

const RecipeDetails = ({ title, _id,prep_time,chef,instructions}) =>(
        <div className="" >
            
            <article class="article">
                <div className="article__conteiner">
                <div className="article-details">
                <h1>DETALLES</h1>
                <h1 className="card-title ">{title}</h1>
                {prep_time}
                <ReactMarkdown key={_id} source={instructions} />
                <span>
                    <a href={`/posts/${_id}`}> <img class="img-chef" src={chef && chef.image.url}></img> </a> 
                    By {chef && chef.full_name}
                </span>
                </div>
                </div>
            </article>
        </div>
)    

export default RecipeDetails;