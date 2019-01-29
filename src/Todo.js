import React, { Component } from "react"
import axios from "axios";

class Todo extends Component {
    constructor() {
        super()

        this.state = {
            list: [],
            searchTerm: ""
        }
    }

    componentDidMount() {
    }

    handleChange = val => {
        this.setState({
            searchTerm: val
        })
    }
    testAxios() {
        axios.get('/test').then(res => {
            console.log(res);
        })
    }
    search() {
        axios.get(`/todos/?search=${this.state.searchTerm}`).then(res => {
            console.log(res.data);
        });
    }
    render() {
        return (
            <div>
                <h2>This is the Todo Class Component</h2>
                <input value={this.state.searchTerm} type="text" onChange={(e) => this.handleChange(e.target.value)} placeholder="QuerySearch"/>
                <button onClick={() => this.search()}>Search</button>
            </div>
        )
    }
}

export default Todo