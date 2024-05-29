import axios from "axios"
import { API_COMMON_URL } from "../../Http"

export const prefixApi = async ()=>{
    let res= await axios.get(`${API_COMMON_URL}/prefixDropdown`)
    return res.data
}

export const  maritalStatusApi = async ()=>{
    let res= await axios.get(`${API_COMMON_URL}/getMaritalStatusDropDown`)
    return res.data
}

export const   bloodGroupApi = async ()=>{
    let res= await axios.get(`${API_COMMON_URL}/getBloodGroupDropDown`)
    return res.data
}


export const   genderApi = async ()=>{
    let res= await axios.get(`${API_COMMON_URL}/getGender`)
    return res.data
}

export const   nationalityApi = async ()=>{
    let res= await axios.get(`${API_COMMON_URL}/getNationalityDropdown`)
    return res.data
}


export const   isdCodeApi = async ()=>{
    let res= await axios.get(`${API_COMMON_URL}/getIsdCodeDropdown`)
    return res.data
}


export const  countriApi = async ()=>{
    let res= await axios.get(`${API_COMMON_URL}/countries`)
    return res.data
}

 

