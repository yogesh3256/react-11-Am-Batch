import axios from "axios";
import { ADDRESS_COMMON_URL, API_COMMON_URL } from "../../Http";

export const countryApi = async () => {
     let res = await axios.get(`${API_COMMON_URL}/countries`)
    return res.data;
}

export const stateApi = async (CountryName) => {
     let res = await axios.get(`${API_COMMON_URL}/fn_state_dropdown/${CountryName?.id}`)
    return res.data;
}

export const districtApi = async (stateName) => {
     let res = await axios.get(`${API_COMMON_URL}/fnDistrictDropdown/${stateName?.id}`)
    return res.data
}

export const talukaApi = async (DistrictName) => {
    let res = await axios.get(`${API_COMMON_URL}/getTalukaDropdown/${DistrictName?.id}`)
    return res.data
}

export const cityApi = async (TalukaName) => {
    let res = await axios.get(`${API_COMMON_URL}/getCityDropdown/${TalukaName?.id}`)
    return res.data
}