
import React, {Component} from 'react';
import {getBears} from './App'
import { connect } from 'react-redux'

class Bear extends Component {

    state={
      name:'ghdf',
    }
    handleChange = (event) =>{
      const value = event.target.value
      const name = event.target.name

      this.setState({
        [name]: value
      })
    }
    handleSubmit = () =>{
      console.log(this.state.name)
      this.props.getBears(this.state.name)
    }

   componentDidMount() {
       console.log('props',this.props)
       this.props.getBears(this.state.name)
   }

  

   render() {
       return (
           <div style={{margin: '20px'}}>
               <h3>Render Bear</h3>
               <input type="text" name="name" onChange = {this.handleChange}/>
               <button onClick = {this.handleSubmit}> Submit </button>
               {this.props.bears.name}
               <img src={this.props.bears.avatar_url}/>
           </div>
       );
   }
}

const mapStateToProps = (state) => {
   return {
       bears: state.bears
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
       getBears: (name) => dispatch(getBears(name))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bear);
