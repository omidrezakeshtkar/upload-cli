import yargs, { CommandModule } from "yargs";
import { uploadCsvFile } from 'commands/uploadCsvFile';

const commands = [uploadCsvFile]

export default (processArguments: string[]) => {
    const cli = yargs(processArguments)
        .scriptName('keycloak')
        .recommendCommands()
        .strict()

    for (const commandModule of Object.values<CommandModule<any, any>>(commands)) {
        cli.command(commandModule)
    }

    if (processArguments.length === 0) {
        cli.showHelp('log')
    }

    return cli
}