import React from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../redux/actions'
import Card from '../conteiners/Cards';
import ReactMarkdown from 'react-markdown';

console.log("aa3");

const mapStateToProps = (state) => ({
    
    loading: state.recipes.isRecipesLoading === true,
    recipes: state.recipes.recipes
});

class Recipes extends React.Component {
  componentWillMount(){
    this.props.dispatch(getRecipes());
  }

  render() {
     return (
         <React.Fragment>
            {this.props.loading ? <p>cargando receta...</p>:
                <div>
                    {this.props.recipes.map(recipe => {
                        return(
                        <div>
                            <Card key={recipe._id} {...recipe}/>
                        </div>
                        )
                    })}
                </div>
            }
         </React.Fragment>
     )
  }
}

export default connect(mapStateToProps, null)(Recipes);