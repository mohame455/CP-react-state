import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Component/Profile/Profile";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      portfolio: [
        {
          src: "https://www.hamaidia.com/images/profile.jpg",
          name: "Mohamed Samet",
          profession: "Web development instructor",
          bio: "i'm a full stack JS instructor at gomycode",
        },
      ],
      sec:0
    };
  }
  handleShow=()=>{
    this.setState({
      isShow:!this.state.isShow
    })
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        sec:this.state.sec+1
      })
    }, 1000);
  }

  displayTime=(timeSec)=>{
    let h=Math.floor(timeSec/3600)
    let m=Math.floor((timeSec-(h*3600))/60)
    let s=Math.floor(timeSec-(h*3600)-(m*60))
    return(<div>
      <span>{String(h).padStart(2,0)} : {String(m).padStart(2,0)} : {String(s).padStart(2,0)}</span>
    </div>)
  }
 


  render() {
    return (
      
      <div style={{marginLeft:'400px'}}>
        <p>{this.displayTime(this.state.sec)}</p>
        <Profile portfolio={this.state.portfolio} handleShow={this.handleShow} isShow={this.state.isShow} />
      </div>
    );
  }
}

export default App;
