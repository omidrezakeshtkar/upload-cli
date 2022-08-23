import axios from "axios";
import { warningLog } from "../logger";
import { convertJsonDataToKeycloakFormat } from "./convertJsonData";
import { getAccessToken } from "./getAccessToken";
import { getUsersList } from "./getUsersList";

export const importUserData = async (jsonarray: any[]) => {
    const accessToken = await getAccessToken()
    const existingKeycloakUsers = await getUsersList(accessToken)
    const usernamelist: string[] = existingKeycloakUsers.map((user: any) => {
        return user.username
    })
    const requestarray = convertJsonDataToKeycloakFormat(jsonarray)
    requestarray.forEach(async (element) => {
        if(!usernamelist.includes(element.username)){
            try {
                await axios({
                    method: "post",
                    url: `${process.env.keycloak_address}/auth/admin/realms/${process.env.keycloak_realm}/users`,
                    headers: { "content-type": "application/json", Authorization: accessToken },
                    data: element,
                })
            } catch (error) {
                console.log(error);
            }
        }else{
            warningLog('duplicate user: ', element.username)
        }
    })   
}