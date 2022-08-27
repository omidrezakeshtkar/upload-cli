import axios from "axios";

export const postSingleUsersImport = async (accessToken: string, jsondata: object) => {
    try {
        await axios({
            method: "post",
            url: `${process.env.keycloak_address}/auth/admin/realms/${process.env.keycloak_realm}/users`,
            headers: { "content-type": "application/json", Authorization: accessToken },
            data: jsondata
        })
    } catch (error) {
        console.log(error);
    }
}