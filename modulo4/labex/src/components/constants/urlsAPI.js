export const urlGetTravels = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-antunes-hooks/trips"

export const urlGetTripDetail = (id)=>{
    return(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-antunes-hooks/trip/${id}`
    )
}

export const urlLogin = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-antunes-hooks/login"

export const urlApplyTrip = (id)=>{
    return `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-antunes-hooks/trips/${id}/apply`
}

export const urlDecideCandidate = (travelId,candidateId)=>{
    return `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-antunes-hooks/trips/${travelId}/candidates/${candidateId}/decide`
}