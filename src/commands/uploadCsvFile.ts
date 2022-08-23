import path from "path";
import { CommandModule } from "yargs";
import { csvReader } from "utils/csvModule";
import { importUserData } from "utils/requestModule";

export const uploadCsvFile: CommandModule<
  Record<string, never>,
  { csvFileAddress: string }
> = {
  command: "upload [csvFileAddress]",
  describe: "read csv address.",
  handler: async (argv) => {
    const csvFileAddress =
      argv.csvFileAddress ?? path.join(process.cwd() + "/files/file.csv");
    const jsonarray = csvReader(csvFileAddress, "utf-8");
    await importUserData(jsonarray)
  },
};