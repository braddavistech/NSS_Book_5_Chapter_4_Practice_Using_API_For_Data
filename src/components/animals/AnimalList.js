import React, { Component } from 'react'
import "./AnimalList.css";


class AnimalList extends Component {
  render() {
    let ownerNumbers = [];
    this.props.owners.map(owner => {
      ownerNumbers.push(owner)
      return ownerNumbers
    })
    this.props.animals.map(animal => {
        let tempString = []
        animal.owner.map(names => {
        let number = names - 1
        tempString.push(ownerNumbers[number].name)
        return tempString
        })
        tempString = tempString.join(", ")
        animal.ownerNames = tempString
        return animal
      })
    return (
      <div>
        <header>CURRENT ANIMALS</header>
        {
          this.props.animals.map(animal =>
            <section className="animal" key={animal.id}>
              <h4>{animal.name}</h4>
              <h5>BREED: {animal.breed}</h5>
              <h5>OWNER(S): {animal.ownerNames}</h5>
            </section>)
        }
      </div>
    )
  }
}

export default AnimalList