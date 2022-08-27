import { parse } from "papaparse"
import { readFileSync } from "fs"
import { infoLog } from "utils/logger"
import { headersMap } from "utils/shared"
import { toPersianChars } from "@persian-tools/persian-tools"


export const csvReader = (fileAddress: string, encoding: BufferEncoding) => {
    infoLog('csv reading started, please wait.')
    const file = readFileSync(fileAddress, encoding).trimEnd()
    return parse(file, {
        header: true, transformHeader: (header) => {
            const persianHeader = toPersianChars(header.trim()) as string
            return headersMap[persianHeader]
        }, complete: () => {
            infoLog('successful exported data from csv file.')
        }
    }).data
}