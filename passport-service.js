
const PASSPORTS_URL = "http://localhost:1818/api/passports"

export const findAllPassports = () =>
    fetch(PASSPORTS_URL)
        .then(response => response.json())

export const findPassportById = (pId) =>
    fetch(`${PASSPORTS_URL}/${pId}`)
        .then(response => response.json())


export const deletePassport = (pId) =>
    fetch(`${PASSPORTS_URL}/${pId}`, {
        method: "DELETE"
    })

export const createPassport = (passport) =>
    fetch(PASSPORTS_URL, {
        method: 'POST',
        body: JSON.stringify(passport),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const updatePassport = (pId, passport) =>
    fetch(`${PASSPORTS_URL}/${pId}`, {
        method: 'PUT',
        body: JSON.stringify(passport),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// TODO: export all functions as the API to this service
export default {
    findAllPassports,
    findPassportById,
    deletePassport,
    createPassport,
    updatePassport
}