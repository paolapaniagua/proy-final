import React from 'react';

const Card = ({ title, _id,prep_time,chef,main_image }) =>(
        <div className="" >
            <article class="article">
                <div className="article__conteiner">
                <div className="article-details">
                <a href={`/recipe/${_id}`}> <img class="img-recetas" src={main_image.url}></img> </a> 
                <h1 className="card-title ">{title}</h1>
                {prep_time}
                <p>This is a preview Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit...</p>
                <span>
                    <a href={`/posts/${_id}`}> <img class="img-chef" src={chef && chef.image.url}></img> </a> 
                    By {chef && chef.full_name}
                </span>
                </div>
                </div>
            </article>
        </div>
)    

export default Card;