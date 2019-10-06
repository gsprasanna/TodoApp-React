import React, { Component } from 'react'

class AddTodo extends Component{
    state={
        content : ""
    }
    handleChange = (e) => {
        this.setState({
            content : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content:""
        })
    }

    render(){
        const {content} =this.state;
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label>Add todo : </label>
                    <input type="text" onChange={this.handleChange} value={content} />
                    
                </form>
            </React.Fragment>
        )
    }
}

export default AddTodo