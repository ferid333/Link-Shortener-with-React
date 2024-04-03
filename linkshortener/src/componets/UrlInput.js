import React, { Component } from 'react'
import "../css/urlinput.css"
class UrlInput extends Component {
  state={
    link:""
  }
  Cahngevalue(e){
    this.setState({link:e.target.value})
  }
  enterlink(e){
    e.preventDefault()
    this.props.setlink(this.state.link)
    e.target.value=""
  }
  render(){
    return (
      <div className='urlshort'>
       <div className='header'>
        <h1>Url Shortener</h1>
       </div>
       <div className='context'>
        <form>
     <input type="text" id="linkinput" placeholder="Enter Your Link.." onChange={this.Cahngevalue.bind(this)}></input>
     <button id='urlbtn' onClick={this.enterlink.bind(this)}>Shorten</button>
     </form>
       </div>
      </div>
    )
  }
}
export default UrlInput;
