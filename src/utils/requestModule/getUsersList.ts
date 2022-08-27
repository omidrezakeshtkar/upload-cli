import axios from "axios"
import { getAccessToken } from "utils/requestModule"
import { usernameListType } from "utils/shared"

export const getUsersListFromKeycloak= async(accessToken: string)=>{
    const response = await axios({
        method: 'get',
        url: `${process.env.keycloak_address}/auth/admin/realms/${process.env.keycloak_realm}/users`,
        headers: { Authorization: accessToken }
    })
    return response.data
}

const exportUsernameList=(data: string[])=>{
    return data.map((user: any) => {
        return user.username
    })
}

export const getUserNameList =async (requestarray: string[]): Promise<usernameListType> => {
    const accessToken = await getAccessToken()
    const existingKeycloakUsers = await getUsersListFromKeycloak(accessToken)
    const usernamelist: string[] = exportUsernameList(existingKeycloakUsers)
    const csvfileusernamelist: string[] = exportUsernameList(requestarray)
    return {usernamelist, csvfileusernamelist}
}