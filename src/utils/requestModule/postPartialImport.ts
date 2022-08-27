import axios from "axios"
import * as cliProgress from "cli-progress"
import { getAccessToken } from "utils/requestModule"

export const postPartialImport = async (batchUsers: any[], progressBarTerminal: cliProgress.SingleBar) => {
    const accessToken = await getAccessToken()
    batchUsers.forEach(async (batch, index) => {
        progressBarTerminal.update(index + 1)
        try {
            await axios({
                method: "post",
                url: `${process.env.keycloak_address}/auth/admin/realms/${process.env.keycloak_realm}/partialImport`,
                headers: { "content-type": "application/json", Authorization: accessToken },
                data: { users: batch },
            })
        } catch (error) {
            console.log(error);
        }
    })
}