import axios from "axios";

export const getAccessToken = async() =>{
    const responseToken = await axios({
        method: "post",
        url: `${process.env.keycloak_address}/auth/realms/${process.env.keycloak_realm}/protocol/openid-connect/token`,
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: new URLSearchParams(`?grant_type=client_credentials&client_id=admin-cli&client_secret=${process.env.keycloak_client_secret}`)
    })
    return "Bearer " + responseToken.data["access_token"]
}