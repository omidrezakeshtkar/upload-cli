import axios from "axios";
import { infoLog, warningLog } from "../logger";
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

    progressBar.start(batchUsers.length, 0);
    batchUsers.forEach(async (batch,index) => {
        progressBar.update(index);
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
    progressBar.update(batchUsers.length);
    progressBar.stop()
    if(duplicateusernamelist.length > 0) warningLog('duplicate users: ', duplicateusernamelist.join(','))
    infoLog('upload users finished!')
}