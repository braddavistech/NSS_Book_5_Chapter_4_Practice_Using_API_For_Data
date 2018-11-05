import React, { Component } from 'react'
import "./OwnersList.css";

class OwnersList extends Component {
  render() {
    let animalNumbers = [];
    this.props.animals.map(animal =>
      animalNumbers.push(animal)
    )
    this.props.owners.map(owner => {
      let tempString = []
      owner.animalId.map(pups => {
        let number = pups - 1
        tempString.push(animalNumbers[number].name)
        return tempString
      })
      tempString = tempString.join(", ")
      owner.animalNames = tempString
      return owner
    })
    return (
      <div>
        <header>ANIMAL OWNERS</header>
        {
          this.props.owners.map(owner =>
            < section className="owners" key={owner.id} >
              <h4>{owner.name}</h4>
              <h5>PETS: {owner.animalNames}</h5>
            </section>
          )
        }
      </div>
    )
  }
}




export default OwnersList