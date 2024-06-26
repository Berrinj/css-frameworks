//This code gets sends login form data to the api
import { API_SOCIAL } from "../constants.mjs";

const action = "/auth/login";
const method = "post";


export async function login(profile) {  
    const loginURL = API_SOCIAL + action;
    const body = JSON.stringify(profile);
    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json",
        },
        method,
        body
    })

    const result = await response.json();
    console.log(result);   
}
