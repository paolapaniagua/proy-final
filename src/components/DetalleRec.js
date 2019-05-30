import React from 'react';
import { connect } from 'react-redux';
import { getRecipes, getRecipesById } from '../redux/actions'
import RecipeDetails from '../conteiners/RecipeDetails';
import ReactMarkdown from 'react-markdown';

console.log("aa3");

const mapStateToProps = (state) => ({
    
    loading: state.recipes.isRecipesLoading === true,
    recipes: state.recipes.recipes
});

class DetalleRec extends React.Component {
  componentWillMount(){
    
    const { match } = this.props; 
    const { params } = match;
    const { idReceta } = params;

    this.props.dispatch(getRecipesById(idReceta));
  }

  render() {
     return (
         <React.Fragment>
         {
         this.props.loading 
          ? <p>cargando receta...</p>
          : <RecipeDetails {...this.props.recipes} />
        }  
         </React.Fragment>
     )
  }
}

export default connect(mapStateToProps, null)(DetalleRec);