import { hideBin } from "yargs/helpers"
import cli from 'commands'
import * as dotenv from 'dotenv'
dotenv.config()

cli(hideBin(process.argv)).parse()
