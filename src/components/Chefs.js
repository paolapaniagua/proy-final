import React from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../redux/actions'
import ReactMarkdown from 'react-markdown';


const mapStateToProps = (state) => ({
    loading: state.chefs.isChefsLoading === true,
    chefs: state.chefs.chefs
});

class Chefs extends React.Component {
  componentWillMount(){
    this.props.dispatch(getChefs());
  }

  render() {
     return (
         <React.Fragment>
            {this.props.loading ? <p>cargando chefs ...</p>:
                <div>
                    <h1>PAGINA DE CHEFS</h1>
                    {this.props.chefs.map(chef => {
                        return <ReactMarkdown key={chef._id} source={chef.bio} />
                    })}
                </div>
            }
         </React.Fragment>
     )
  }
}

export default connect(mapStateToProps, null)(Chefs);