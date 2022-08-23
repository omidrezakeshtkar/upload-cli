import path from "path";
import { CommandModule } from "yargs";
import { csvReader } from "utils/csvModule";
import { keykloakRequest } from "utils/csvModule/requestModule";

export const readCsvFile: CommandModule<
  Record<string, never>,
  { csvFileAddress: string }
> = {
  command: "readfile [csvFileAddress]",
  describe: "read csv address.",
  handler: async (argv) => {
    const csvFileAddress =
      argv.csvFileAddress ?? path.join(process.cwd() + "/files/file.csv");
    const jsonarray = csvReader(csvFileAddress, "utf-8");
    const request = new keykloakRequest(jsonarray)
    await request.importUserData()
  },
};
