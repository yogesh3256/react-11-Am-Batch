import axios from "axios"
import { API_COMMON_URL } from "../../Http"

export const getStudentdata = async () => {
    const res = await axios.get(`${API_COMMON_URL}/StudentsList`)
    return res.data
}
//Delete  student in database
export const deleteStudent = async (selectedRowIdToDelete) => {
    const res = await axios.delete(`${API_COMMON_URL}/deleteStudent/${selectedRowIdToDelete}`)
    return res.data
}
//put student in database
export const putStudentData = async (selectedRow,tempObj) => {
    const res = await axios.put(`${API_COMMON_URL}/updateStudent/${selectedRow.id}`, tempObj)
    return res.data
}
//post student in database
export const postStudentData =async (tempObj)=>{
    const res =await  axios.post(`${API_COMMON_URL}/student/save`, tempObj)
    return res.data
}
