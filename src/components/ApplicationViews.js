import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import APITools from '../modules/APITools'
// import SearchList from './search/SearchList'


export default class ApplicationViews extends Component {

  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: [],
    searchValue: {}
  }


  componentDidMount() {
    const newState = {}
    APITools.getAllAnimals().then(animals => newState.animals = animals)
    .then(() => APITools.getAllOwners()).then(owners => newState.owners = owners)
    .then(() => APITools.getAllEmployees()).then(employees => newState.employees = employees)
    .then(() => APITools.getAllLocations()).then(locations => newState.locations = locations)
    .then(() => {
      this.setState(newState)
    })
  }


  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners} />
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnersList animals={this.state.animals} owners={this.state.owners} />
        }} />
        {/* <Route exact path="/search" render={(props) => {
          console.log(this.searchValue)
          return <SearchList searchValue={this.state.searchValue} animals={this.state.animals} employees={this.state.employees} owners={this.state.owners} locations={this.state.locations} />
        }} /> */}
      </React.Fragment>
    )
  }
}
