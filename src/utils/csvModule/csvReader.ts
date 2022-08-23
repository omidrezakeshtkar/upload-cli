import { parse } from "papaparse";
import { readFileSync } from "fs";
import { infoLog } from "utils/logger";
import { toPersianChars } from "@persian-tools/persian-tools";
import { headersMap } from "utils/csvModule/shared"

export const csvReader=(fileAddress: string , encoding: BufferEncoding)=>{
    infoLog('csv reading started, please wait.')
    const file=readFileSync(fileAddress, encoding);
    return parse(file,{header:true, transformHeader:(header)=>{
        const persianHeader = toPersianChars(header.trim()) as string
        return headersMap[persianHeader]
    }, complete: () =>{
        infoLog('successful exported.')
    }}).data
}