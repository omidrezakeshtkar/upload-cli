import { CommandModule } from 'yargs'
import { csvConverter } from 'utils/csvModule'
import { infoLog } from 'utils/logger'
import path from 'path'
export const convertCsvFile: CommandModule<Record<string, never>, { xlsxFileAddress: string, csvFileAddress: string }> = {
    command: "convert [xlsxFileAddress] [csvFileAddress]",
    describe: "convert xlsx file to csv file.",
    handler: (argv)=>{
        const xlsxFileAddress = argv.xlsxFileAddress ?? path.join(process.cwd(), '/files/file.xlsx')
        const csvFileAddress = argv.csvFileAddress ?? path.join(process.cwd(), '/files/file.csv')
        const converter = new csvConverter(xlsxFileAddress, csvFileAddress)
        converter.csvConverter()
    }
}