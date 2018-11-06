import React, { Component } from 'react'
import "./search.css";

export default class SearchList extends Component {

  // constructor(props) {
  //   super(props);
  //   this.searchValue = {searchValue: ''};
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
    // this.setState({searchValue: event.target.value});
    // console.log(event.target.value)
  //   this.searchAPI(event.target.value)
  //   return this.searchValue;
  // }

  // searchAPI = (newSearch) => {
  //   const newState = {}
  //   fetch(`http://localhost:5002/animals?q=${newSearch}`)
  //     .then(a => a.json())
  //     .then(animals => newState.animals = animals)
  //     .then(() => fetch(`http://localhost:5002/employees?q=${newSearch}`)
  //       .then(e => e.json()))
  //     .then(employees => newState.employees = employees)
  //     .then(() => fetch(`http://localhost:5002/locations?q=${newSearch}`)
  //       .then(l => l.json()))
  //     .then(locations => newState.locations = locations)
  //     .then(() => fetch(`http://localhost:5002/owners?q=${newSearch}`)
  //       .then(o => o.json()))
  //     .then(owners => newState.owners = owners)
  //     .then(() => {
  //       newState.searchValue = newSearch;
  //       this.setState(this.searchValue= newState)
  //       console.log(this.searchValue)
  //     })

  // }

  render() {
    console.log(this.props.searchValue)
    return (
      <div>
        <header>SEARCH LIST</header>
        <h4>Search Animals</h4>
        {
          this.props.animals.map(animal =>
            <p key={animal.id}>{animal.name}</p>
        )
          }
        <header></header>
      </div>
    )
  }
}
