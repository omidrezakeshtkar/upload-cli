import chalk from "chalk";

export const infoLog = (message?: any, ...optionalParams: any[]): void => {
    console.log(`${chalk.cyan('  ℹ️ Info:')} ` + message, ...optionalParams)
}

export const warningLog = (message?: any, ...optionalParams: any[]): void => {
    console.log(`${chalk.yellow(' ⚠️  Warning:')} ` + message, ...optionalParams)
}

export const errorLog = (message?: any, ...optionalParams: any[]): void => {
    console.log(`${chalk.red(' ❌  Error:')} ` + message, ...optionalParams)
}