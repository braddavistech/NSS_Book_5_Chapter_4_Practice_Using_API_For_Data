import React, { Component } from "react"
import { Link } from "react-router-dom"
import ReactDOM from 'react-dom';
// import SearchList from './search/SearchList'
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"



class NavBar extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // this.setState({searchValue: event.target.value});
    // console.log(event.target.value)
    this.searchAPI(event.target.value)
    // return this.searchValue;

  }

  searchAPI = (newSearch) => {
    const newState = {}
    fetch(`http://localhost:5002/animals?q=${newSearch}`)
      .then(a => a.json())
      .then(animals => newState.animals = animals)
      .then(() => fetch(`http://localhost:5002/employees?q=${newSearch}`)
        .then(e => e.json()))
      .then(employees => newState.employees = employees)
      .then(() => fetch(`http://localhost:5002/locations?q=${newSearch}`)
        .then(l => l.json()))
      .then(locations => newState.locations = locations)
      .then(() => fetch(`http://localhost:5002/owners?q=${newSearch}`)
        .then(o => o.json()))
      .then(owners => newState.owners = owners)
      .then(() => {
        newState.searchValue = newSearch;
        this.setState(this.searchValue = newState)
        console.log(this.searchValue)
        this.searchRender(this.searchValue)
      })

    return newSearch
  }

  render() {

    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Locations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/animals">Animals</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employees">Employees</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/owners">Owners</Link>
          </li>
          <li>
            {
              console.log(this.searchValue)
            }
            <Link className="nav-link" to="/search" ><input type="text" id="searchInput" onKeyUp={this.handleChange} placeholder="Enter Search"></input></Link>
          </li>
        </ul>
      </nav>
    )
  }

  searchRender(searchThis) {
    console.log(this.searchValue)
    return ReactDOM.render(
      (
        <div id="searchResults">
          <header>SEARCH LIST</header>
          <h2>Search Animals</h2>
          {
            searchThis.animals.map(animal =>
              <h3 className="animal" key={animal.id}>{animal.name}, {animal.breed}</h3>
            )
          }
          <h2>Search Owners</h2>
          {
            searchThis.owners.map(owner =>
              < section className="owners" key={owner.id} >
                <h3>{owner.name}</h3>
              </section>
            )
          }
          <h2>Search Employees</h2>
          {
            searchThis.employees.map(employee =>
              < section className="employee" key={employee.id} >
                <h3>{employee.name}</h3>
              </section>
            )
          }
          <h2>Search Locations</h2>
          {
            searchThis.locations.map(location =>
              < section className="location" key={location.id} >
                <h3>{location.name}</h3>
              </section>
            )
          }
        </div>
      ), document.getElementById('search'));

  }
}

export default NavBar