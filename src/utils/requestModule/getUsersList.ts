import axios from "axios"
import { getAccessToken } from "utils/requestModule/getAccessToken"

export const getUsersList= async(accessToken: string)=>{
    const response = await axios({
        method: 'get',
        url: `${process.env.keycloak_address}/auth/admin/realms/${process.env.keycloak_realm}/users`,
        headers: { Authorization: accessToken }
    })
    return response.data
}