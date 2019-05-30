import React from 'react';
import { connect } from 'react-redux';
import { getGaleriaFotos } from '../redux/actions'
import ReactMarkdown from 'react-markdown';

console.log("aa3");

const mapStateToProps = (state) => ({
    
    loading: state.recipes.isGaleriaFotosLoading === true,
    galeriaFotos: state.galeriaFotos.galeriaFotos
});

class GaleriaFotos extends React.Component {
  componentWillMount(){
    this.props.dispatch(getGaleriaFotos());
  }

  render() {
     return (
         <React.Fragment>           
            {this.props.loading ? <p>cargango galeria ...</p>:
            
                <div>
                    {this.props.galeriaFotos.map(galeriaFoto => {
                        return(
                        <div>
                            <ReactMarkdown key={galeriaFoto._id} source={galeriaFoto.photos.name} />
                        </div>
                        )
                    })}
                </div>
            }
         </React.Fragment>
     )
  }
}

export default connect(mapStateToProps, null)(GaleriaFotos);