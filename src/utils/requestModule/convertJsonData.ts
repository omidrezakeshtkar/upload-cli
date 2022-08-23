import { englishHeader } from "utils/shared";

export const convertJsonDataToKeycloakFormat=(jsonarray: any[])=>{
    return jsonarray.map((element: englishHeader)=>{
        return {
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
            enabled: process.env.user_enabled
        }
    })
}