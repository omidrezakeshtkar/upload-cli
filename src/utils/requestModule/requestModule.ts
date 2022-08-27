import * as lodash from 'lodash'
import * as cliProgress from 'cli-progress'
import { usernameListType } from "utils/shared"
import { getUserNameList } from "utils/requestModule"
import { postPartialImport } from "./postPartialImport"
import { infoLog, warningLog, errorLog } from "utils/logger"
import { duplicateCheck, removeDuplicateData } from "utils/requestModule/shared"
import { convertJsonDataToKeycloakFormat } from "utils/csvModule"

const setProgressBar = (batchUsers: any) => {
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    progressBar.start(batchUsers.length, 0)
    progressBar.setTotal(batchUsers.length)
    return progressBar
}

export const importUserData = async (jsonarray: any[]) => {
    const requestdataarray: string[] = convertJsonDataToKeycloakFormat(jsonarray)
    const usernamelists: Promise<usernameListType> = getUserNameList(requestdataarray)
    const duplicateusernamelist: string[] = await duplicateCheck(usernamelists)
    const requestarray:string[] = removeDuplicateData(requestdataarray, duplicateusernamelist)
    const batchUsers: string[][] = lodash.chunk(requestarray, 1000)
    const progressBar: cliProgress.SingleBar = setProgressBar(batchUsers)

    postPartialImport(batchUsers, progressBar)

    if (duplicateusernamelist.length > 0) {
        progressBar.stop()
        warningLog('duplicate users: ',
            duplicateusernamelist.join(','))
    }
    if (batchUsers.length > 0) {
        progressBar.stop()
        infoLog('upload users finished!')
    }
    else {
        progressBar.stop()
        errorLog('all data duplicate.')
    }
}