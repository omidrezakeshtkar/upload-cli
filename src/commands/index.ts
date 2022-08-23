import fs from 'fs'
import path from 'path';
import { infoLog, errorLog } from "utils/logger";
import yargs, { CommandModule } from "yargs";
import { convertCsvFile } from "commands/convertCsvFile";
import { readCsvFile } from 'commands/readCsvFile';

const commands = [ readCsvFile ]

// const checkExportFolderExistAndNotCreated=(foldername: string)=>{
//     if(!fs.existsSync(foldername)){
//         fs.mkdir(foldername, (err) => {
//             if (err) {
//                 errorLog(err)
//             }
//             infoLog('Directory created successfully!')
//         });
//     }
// }

export default (processArguments: string[])=>{
    const cli = yargs(processArguments)
    .scriptName('uploadcli')
    .recommendCommands()
    .strict()

    for (const commandModule of Object.values<CommandModule<any, any>>(commands)){
        cli.command(commandModule)
    }

    if (processArguments.length === 0 ){
        cli.showHelp('log')
    }

    // checkExportFolderExistAndNotCreated(path.join(process.cwd(), '/files'))

    return cli
}