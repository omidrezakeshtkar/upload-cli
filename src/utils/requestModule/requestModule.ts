import axios from "axios";
import { errorLog, infoLog, warningLog } from "../logger";
import { convertJsonDataToKeycloakFormat } from "./convertJsonData";
import { getAccessToken } from "./getAccessToken";
import { getUsersList } from "./getUsersList";
import * as lodash from 'lodash'
import * as cliProgress from 'cli-progress'

export const importUserData = async (jsonarray: any[]) => {
    let importUserArray: any
    const accessToken = await getAccessToken()
    const existingKeycloakUsers = await getUsersList(accessToken)
    const usernamelist: string[] = existingKeycloakUsers.map((user: any) => {
        return user.username
    })
    const requestarray = convertJsonDataToKeycloakFormat(jsonarray)
    const csvfileusernamelist: string[] = requestarray.map((user:any)=>{
        return user.username
   })
    const duplicateusernamelist: string[] = lodash.intersection(usernamelist, csvfileusernamelist)
    lodash.remove(requestarray, list => duplicateusernamelist.includes(list.username))
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    const batchUsers = lodash.chunk(requestarray, 1000)

    progressBar.start(batchUsers.length, 0)
    progressBar.setTotal(batchUsers.length)
    batchUsers.forEach(async (batch,index) => {
        progressBar.update(index + 1);
        try {
            await axios({
                method: "post",
                url: `${process.env.keycloak_address}/auth/admin/realms/${process.env.keycloak_realm}/partialImport`,
                headers: { "content-type": "application/json", Authorization: accessToken },
                data: {users:batch},
            })
        } catch (error) {
            console.log(error);
        }
    })
    
    if(duplicateusernamelist.length > 0) progressBar.stop(), warningLog('duplicate users: ', duplicateusernamelist.join(','))
    if(batchUsers.length>0) progressBar.stop(), infoLog('upload users finished!')
    else progressBar.stop(), errorLog('all data duplicate.')
}