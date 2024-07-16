import axios from "axios"
import { API_COMMON_URL } from "../../Http"

export const fetchData = async ({ page, limit }) => {
    const res = await axios.post(`${API_COMMON_URL}/getPaginatedStudents`, { pageNumber: page, pageSize: limit })
    return res.data
}