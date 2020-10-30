import React from 'react';
import { connect } from 'react-redux';
import Band from './Band';

class Bands extends React.Component {
    renderBands = () => {
        return this.props.bands.map(band => <Band delete={this.props.delete} band={band} />) 
    }
    render(){
        return(
            <div>
                Bands:
                <ul>
                    {this.renderBands()}
                </ul>
            </div>
        )
    }
    

}

const mapStateToProps = (state) => ({
    bands: state.bands
})

export default connect(mapStateToProps)(Bands);