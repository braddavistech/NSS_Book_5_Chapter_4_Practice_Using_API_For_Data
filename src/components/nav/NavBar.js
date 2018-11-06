import React, { Component } from "react"
import { Link } from "react-router-dom"
import APITools from '../../modules/APITools'
import SearchSuggestions from "../../modules/SearchSuggestions"
// import ReactDOM from 'react-dom'
// import SearchSuggestion from "../modules/SearchSuggestions"
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"



class NavBar extends Component {

  state = {
    searchString: '',
    searchReturns: []
  }


  handleChange = () => {
    this.setState({
      searchString: this.searchInput.value
    }, () => {
      if (this.state.searchString) {
        let type = ["animals", "owners", "employees", "locations"]
        // let filteredList = {}
        let promises = []
        type.forEach(entity => {
          promises.push(APITools.searchApiInput(this.state.searchString, entity).then(data => {
            // filteredList[entity] = data
            return data
          })
          )
          // console.log(promises)
          // return promises
        })
        Promise.all(promises)
         .then(results => {
            console.log(results)
            this.setState({
              searchReturns: results
            })
          })
          .then(() => {
            console.log(this.state.searchReturns)
            return this.state.searchReturns
          })
      } else if (!this.state.searchString) {
        this.setState({
          searchReturns: []
        })
      }
    })
  }


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
  //       this.setState(this.searchValue = newState)
  //       this.searchRender(this.searchValue)
  //     })
  //   return newSearch
  // }

  // displayDetails(event) {
  //   console.log(event.target);
  //   fetch(`http://localhost:5002/${event.target.className}?id=${event.target.id}`)
  //     .then(a => a.json())
  //     .then(searchObject => {
  //       console.log(searchObject)
  //     }
  //     )
  // }


  // searchRender(searchThis) {
  //   console.log(this.searchValue)
  //   return ReactDOM.render(
  //     (
  //       <div id="searchResults">
  //         <header >SEARCH LIST</header>
  //         <h2>Search Animals</h2>
  //         {
  //           searchThis.animals.map(animal =>
  //             <div>
  //               <h3 className="animal" key={animal.id}>{animal.name}, {animal.breed}</h3>
  //               <button id={animal.id} className="animals" onClick={this.displayDetails}>See Details</button>
  //             </div>
  //           )
  //         }
  //         <h2>Search Owners</h2>
  //         {
  //           searchThis.owners.map(owner =>
  //             < section className="owners" key={owner.id} >
  //               <h3>{owner.name}</h3>
  //             </section>
  //           )
  //         }
  //         <h2>Search Employees</h2>
  //         {
  //           searchThis.employees.map(employee =>
  //             < section className="employee" key={employee.id} >
  //               <h3>{employee.name}</h3>
  //             </section>
  //           )
  //         }
  //         <h2>Search Locations</h2>
  //         {
  //           searchThis.locations.map(location =>
  //             < section className="location" key={location.id} >
  //               <h3>{location.name}</h3>
  //             </section>
  //           )
  //         }
  //       </div>
  //     ), document.getElementById('searchBox'));
  // }

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
          <li className="nav-item">
            <form id="searchInput">
              <input type="text" ref={input => this.searchInput = input} onChange={this.handleChange} placeholder="Enter Search"></input>
              <SearchSuggestions searchReturns={this.state.searchReturns} />
            </form>
          </li>
        </ul>
      </nav>
    )
  }

}

export default NavBar