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
            this.setState({
                list: res.data
            })
        });
    }
    render() {

        let { list } = this.state
        let listDisplay = list.map((item, i) => {
            return(
                <div key={i}>
                <h3>{item.todo}</h3>
                <h4>{item.for}</h4>
                <h4>{item.how}</h4>
            </div>
            )

        }) 

        return (
            <div>
                <h2>This is the Todo Class Component</h2>
                <input value={this.state.searchTerm} type="text" onChange={(e) => this.handleChange(e.target.value)} placeholder="QuerySearch"/>
                <button onClick={() => this.search()}>Search</button>
                {listDisplay}
            </div>
        )
    }
}

export default Todo