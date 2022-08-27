import * as lodash from 'lodash'
import { usernameListType } from "utils/shared"

export const duplicateCheck = async(usernamelists: Promise<usernameListType>): Promise<string[]> => {
    return lodash.intersection((await usernamelists).usernamelist, (await usernamelists).csvfileusernamelist)
}

export const removeDuplicateData=(requestdataarray: string[], duplicateusernamelist: string[])=>{
    return lodash.remove(requestdataarray, list => duplicateusernamelist.includes((list as any).username))
}