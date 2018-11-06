import React from 'react'

const SearchSuggestion = (props) => {
  if(props.searchReturns.length !== 0) {
    const printAnimals = props.searchReturns[0].map(result => (
    <li className="searchOptions" key={result.id}>Pet: {result.name}</li>
  ))
  const printOwners = props.searchReturns[1].map(result => (
    <li className="searchOptions" key={result.id}>Owners: {result.name}</li>
  ))
  const printEmployees = props.searchReturns[2].map(result => (
    <li className="searchOptions" key={result.id}>Employees: {result.name}</li>
  ))
  const printLocations = props.searchReturns[3].map(result => (
    <li className="searchOptions" key={result.id}>Locations: {result.name}</li>
  ))
  return <ul>{printAnimals}{printOwners}{printEmployees}{printLocations}</ul>
  } else return <ul></ul>
}

export default SearchSuggestion