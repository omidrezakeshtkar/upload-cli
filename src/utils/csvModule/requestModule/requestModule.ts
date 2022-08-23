import axios from "axios";
import { englishHeader } from "utils/csvModule/shared";
import { errorLog, infoLog } from "../../logger";

export class keykloakRequest {
    private accessToken: string = ''
    private keycloak_address = process.env.keycloak_address
    private keycloak_realm = process.env.keycloak_realm
    private user_enabled = process.env.user_enabled
    private jsonrequest: any[] = []
    private duplicatecondition: boolean = false
    private jsonkeycloakuserlist: any[] = []

    constructor(jsonarray: any) {
        this.convertJsonDataToKeycloakFormat(jsonarray)
    }

    private convertJsonDataToKeycloakFormat = (jsonarray: any[]) => {
        jsonarray.forEach(async (element: englishHeader) => {
            this.jsonrequest.push({
                firstName: element.firstName,
                lastName: element.lastName,
                username: element.nationalCode,
                credentials: [{ "type": "password", "value": element.birthday, "temporary": false }],
                attributes: {
                    "fatherName": element.fatherName,
                    "gender": element.gender,
                    "nationalCode": element.nationalCode,
                    "birthday": element.birthday,
                    "province": element.province,
                    "organization": element.organization,
                    "region": element.region,
                    "degree": element.degree,
                    "grade": element.grade,
                    "schoolName": element.schoolName,
                    "schoolType": element.schoolType,
                    "schoolCode": element.schoolCode,
                    "schoolGender": element.schoolGender,
                    "mobileNumber": element.mobileNumber,
                    "parentMobileNumber": element.parentMobileNumber
                },
                enabled: this.user_enabled
            })
        });
    }

    private getAccessToken = async () => {
        const responseToken = await axios({
            method: "post",
            url: `${this.keycloak_address}/auth/realms/${this.keycloak_realm}/protocol/openid-connect/token`,
            headers: { "content-type": "application/x-www-form-urlencoded" },
            data: new URLSearchParams('?grant_type=client_credentials&client_id=admin-cli&client_secret=jl9oXMKpOsetXfOKSjkFwIsR7fGZPKZi')
        })
        this.accessToken = "Bearer " + responseToken.data["access_token"]
    }

    private getUsersList = async () => {
        const response = await axios({
            method: 'get',
            url: `${this.keycloak_address}/auth/admin/realms/${this.keycloak_realm}/users`,
            headers: { Authorization: this.accessToken }
        })
        this.jsonkeycloakuserlist = response.data
    }

    private checkDuplicateDataCheck = (jsonarray1: any[], jsonarray2: any[]) => {
        jsonarray1.map((item)=>{
            this.duplicatecondition = jsonarray2.find(test=>test.nationalCode == item.nationalCode)
        })
    }
    public importUserData = async () => {
        await this.getAccessToken()
        await this.getUsersList()
        await this.checkDuplicateDataCheck(this.jsonrequest, this.jsonkeycloakuserlist)
        
        if (!this.duplicatecondition){
            try {
                this.jsonrequest.forEach(async(element)=>{
                    const result = await axios({
                        method: "post",
                        url: `${this.keycloak_address}/auth/admin/realms/${this.keycloak_realm}/users`,
                        headers: { "content-type": "application/json", Authorization: this.accessToken },
                        data: element,
                    })
                })
            } catch (error) {
                console.log(error);
            }
        }
        else{
            errorLog('duplicate member found!')
        }
    }

}