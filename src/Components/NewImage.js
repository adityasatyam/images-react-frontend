import axios from 'axios';
import React, { Component } from 'react';

const BASE_URL = "https://image-loader-backend.herokuapp.com/"
class NewImage extends Component {
    state = {
        name: "",
        description: "",
        url: ""

    }
    onFormSubmit = async (e) => {
        e.preventDefault();
        await axios.post(BASE_URL, {
            "id": Math.floor(Math.random() * 10000),
            "url": this.state.url,
            "name": this.state.name,
            "description": this.state.description
        })
        this.setState({ name: "", description: "", url: "" })
    }
    render() {
        return (<div className="row">
            <form className="col-12" style={{ paddingLeft: "30%", paddingRight: "30%", paddingTop: "10%" }}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="" placeholder="Enter name"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <input type="text" className="form-control" id="description" aria-describedby="" placeholder="Enter description" required
                        value={this.state.description}
                        onChange={(e) => this.setState({ description: e.target.value })}
                    />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label for="imageUrl">Image Url</label>
                    <input type="url" className="form-control" id="url" aria-describedby="" placeholder="Enter Image Url" required
                        value={this.state.url}
                        onChange={(e) => this.setState({ url: e.target.value })}

                    />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div style={{ flex: 1, alignItems: "center" }}>
                    <button style={{ flex: 1 }} type="submit" className="btn btn-primary"
                        onClick={this.onFormSubmit}
                    >Submit</button>
                </div>
            </form>

        </div>);
    }
}

export default NewImage;