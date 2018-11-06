const localURL = "http://localhost:5002/"

export default Object.create (null, {
    searchApiInput: {
      value: function (searchValue, objectName) {
        return fetch(`${localURL}${objectName}?q=${searchValue}`).then(results => results.json())
      }
    },
    getAllAnimals: {
      value: function () {
        return fetch(`${localURL}animals`).then(stuff => stuff.json())
      }
    },
    getAllOwners: {
      value: function () {
        return fetch(`${localURL}owners`).then(stuff => stuff.json())
      }
    },
    getAllEmployees: {
      value: function () {
        return fetch(`${localURL}employees`).then(stuff => stuff.json())
      }
    },
    getAllLocations: {
      value: function () {
        return fetch(`${localURL}locations`).then(stuff => stuff.json())
      }
    }

})

