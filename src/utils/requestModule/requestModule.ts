import * as lodash from 'lodash'
import * as cliProgress from 'cli-progress'
import { getUserNameList } from "utils/requestModule"
import { postPartialImport } from "./postPartialImport"
import { infoLog, warningLog, errorLog } from "utils/logger"
import { convertJsonDataToKeycloakFormat } from "utils/csvModule"

const setProgressBar = (batchUsers: any) => {
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    progressBar.start(batchUsers.length, 0)
    progressBar.setTotal(batchUsers.length)
    return progressBar
}

export const importUserData = async (jsonarray: any[]) => {
    const requestDataArray = convertJsonDataToKeycloakFormat(jsonarray)
    const usernameLists = await getUserNameList(requestDataArray)
    const duplicateUsernameList = lodash.intersection(usernameLists.usernameList, usernameLists.csvFileUsernameList)
    const requestArray = lodash.remove(requestDataArray, list => duplicateUsernameList.includes((list as any).username))
    const batchUsers = lodash.chunk(requestArray, Number(process.env.chunk_size))
    const progressBar = setProgressBar(batchUsers)

    postPartialImport(batchUsers, progressBar)

    if (duplicateUsernameList.length > 0) {
        progressBar.stop()
        warningLog('duplicate users: ',
        duplicateUsernameList.join(','))
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