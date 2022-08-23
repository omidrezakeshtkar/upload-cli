// import fs from 'fs'
// import * as XLSX from 'xlsx'

// export const csvConverter = () => {
//     console.log(__dirname);

//     const workbook = XLSX.readFile(process.cwd() + '/src/Emdad Sample.xlsx');
//     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//     const stream = XLSX.stream.to_csv(worksheet);

//     const output_file_name = "out.csv";
//     stream.pipe(fs.createWriteStream(output_file_name));
// }

import fs from 'fs'
import path from 'path'
import xlsx from 'node-xlsx'
type xlsxType={
    name: string;
    data: unknown[];
}[];
import { errorLog, infoLog } from "utils/logger";

export class csvConverter{
    private rows: any =[]
    private writeString: string = ""
    private xslxFileAddress: string = ""
    private csvFileAddress: string = ""

    constructor(xslxFileAddress:any, csvFileAddress: any){
        this.xslxFileAddress = xslxFileAddress
        this.csvFileAddress = csvFileAddress
    }

    private readRowsSheet=(value:xlsxType): any=>{
        //looping through all sheets
        infoLog('read rows from xlsx file.')
        for (var i = 0; i < value.length; i++) {
            let sheet = value[i]
            //loop through all rows in the sheet
            for (let j = 0; j < sheet['data'].length; j++) {
                //add the row to the rows array
                this.rows.push(sheet['data'][j])
            }
        }
    }

    private convertRowsToCsvString=(rows: any[])=>{
        infoLog('convert rows string to csv string format.')
        for (var i = 0; i < rows.length; i++) {
            this.writeString += rows[i].join(",") + "\n"
        }
    }
    private writeStringToFileAsCsv=()=>{
        infoLog('write csv string to csv file.')
        fs.writeFile(this.csvFileAddress, this.writeString,  (err: any) => {
            if (err) {
                return console.log(err)
            }
            infoLog(path.basename(this.csvFileAddress) + ' was saved in the current directory!')
        });
    }

    public csvConverter = () => {
        let obj: xlsxType = xlsx.parse(this.xslxFileAddress); // parses a file
        this.readRowsSheet(obj)
        //creates the csv string to write it to a file
        this.convertRowsToCsvString(this.rows)
        //writes to a file, but you will presumably send the csv as a      
        //response instead
        this.writeStringToFileAsCsv()
    }
}
