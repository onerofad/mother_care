import axios from 'axios'
export default function getUsers(){
    return(
        axios.create({
            baseURL: 'https://mother-db-3weq.vercel.app/api/users/',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    )
}

export function getWatchers(){
    return(
        axios.create({
            baseURL: "https://mother-db-3weq.vercel.app/api/registerwatchers/",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    )
}

export function getMakeRequest(){
    return(
        axios.create({
            baseURL: "https://mother-db-3weq.vercel.app/api/makerequests/",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    )
}

export function getSupport(){
    return(
        axios.create({
            baseURL: "https://mother-db-3weq.vercel.app/api/supports/",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    )
}

export function getChats(){
    return(
        axios.create({
            baseURL: "https://mother-db-3weq.vercel.app/api/chats/",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    )
}

export function getCards(){
    return(
        axios.create({
            baseURL: "https://mother-db-3weq.vercel.app/api/cards/",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    )
}


