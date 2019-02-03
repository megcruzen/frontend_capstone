const remoteURL = "http://localhost:5002"

export default {

    get(id) {
        return fetch(`${remoteURL}/students/${id}`)
        .then(data => data.json())
    },

    getMyConventions() {
        return fetch(`${remoteURL}/userConventions?userId=1&_expand=convention`)
        .then(data => data.json())
    },

    postConvention(newCon) {
        return fetch(`${remoteURL}/conventions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newCon)
        })
        .then(data => data.json())
    },

    getGenres() {
        return fetch(`${remoteURL}/genres`)
        .then(data => data.json())
    },

    getCostumes() {
        return fetch(`${remoteURL}/costumes?userId=1`)
        .then(data => data.json())
    }
}