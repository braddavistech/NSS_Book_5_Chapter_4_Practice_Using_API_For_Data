import React, { Component } from 'react'
import "./LocationList.css";


class LocationList extends Component {
  render() {
    return (
      <div>
        <header>STUDENT KENNELS</header>
        {
          this.props.locations.map(location =>
            <section className="address" key={location.id}>
              <h4>{location.name}</h4>
              <h5>{location.address}</h5>
              <h5>{location.city}, {location.state} {location.zip}</h5>
              <h5>{location.phone}</h5>
            </section>)
        }
      </div>
    )
  }
}

export default LocationList