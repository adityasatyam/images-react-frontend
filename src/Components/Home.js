import React,{Component} from 'react';
import axios from 'axios';
import Image from './Image';

const BASE_URL="https://image-loader-backend.herokuapp.com/"
class Home extends Component {
    state = { 
        imageList:[]
     }

    
    componentDidMount=()=>{
        axios.get(BASE_URL).then(respose=>this.setState({imageList:respose.data},()=>console.log(this.state.imageList)))
    }
    render() { 
        return ( <div>
            <div className="row" style={{justifyContent:"space-around"}}>
            {
                this.state.imageList.map(data=>{
                    return <Image data={data}/>
                })
            }
            </div>
        </div> );
    }
}
 
export default Home;