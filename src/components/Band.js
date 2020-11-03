import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log(this.props.bands)
    return(
      <div>
          {this.props.bands.map(band => <li key={band.id}>{band.name} <button onClick={() => this.props.delete(band.id)}>DELETE</button></li>)
          }
      </div>
    );
  }
};

export default Band;
