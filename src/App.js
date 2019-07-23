import React, {Component} from 'react';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      products : [
        {
          id : 1,
          name : 'Nokia 6',
          price : 2000000,
          status : true
        },
        {
          id : 2,
          name : 'Nokia 6.1 Plus',
          price : 3000000,
          status : true
        },
        {
          id : 3,
          name : 'Nokia 8.1 Plus',
          price : 4500000,
          status : true
        }
      ],
      isActive : true
    };
    // this.onSetState = this.onSetState.bind(this);
  }
  onSetState = () => {
    // if(this.state.isActive === true) {
    //   this.setState({
    //     isActive : false
    //   });
    // }else {
    //   this.setState({
    //     isActive : true
    //   });
    // }
    this.setState({
      isActive : !this.state.isActive
    });
  }
  render(){
    let elements = this.state.products.map((product, index) => {
      let result ='';
      if(product.status){
        result =  <tr key={ index }>
                    <td>{ index }</td>
                    <td>{ product.name }</td>
                    <td>                    
                      <span className="label label-success">IDR { product.price }</span>                    
                    </td>
                  </tr>
      }
      return result;
      });
    return(
      <div>
        <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href="state">React State</a>
      </nav>
      <div className="container">
        <div className="row">
          <div className="row">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>STT</th> 
                  <th>Nama Produk</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
              { elements }                
              </tbody>
            </table>            
            <button type="button" className="btn btn-warning" onClick={ this.onSetState }>
              Active : { this.state.isActive === true ? 'true' : 'false' }
            </button>            
          </div>
        </div>
      </div>
      </div>  
    );
  }
}

export default App;