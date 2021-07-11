import React, { Component } from 'react';
class Image extends Component {
    state = {}
    render() {
        return (<div className="col-6 col-md-4" style={{ borderWidth: 5,padding:10 ,paddingLeft:20}}>
            <div className="card" style={{width: 300,height:400,borderRadius:8}}>
                <img className="card-img-top" src={this.props.data.url} style={{width:300,height:200}} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.name}</h5>
                    <p className="card-text">{this.props.data.description}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>);
    }
}

export default Image;