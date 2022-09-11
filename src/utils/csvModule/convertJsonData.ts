import { englishHeader, keycloakUserFormat } from "utils/shared";

export const convertJsonDataToKeycloakFormat = (jsonArray: any[]): any[] => {
	return jsonArray.map((element: englishHeader): keycloakUserFormat => {
		return {
			firstName: element.firstName,
			lastName: element.lastName,
			username: element.nationalCode,
			credentials: [
				{ type: "password", value: element.dateOfBirth, temporary: false },
			],
			attributes: {
				firstName: element.firstName,
				lastName: element.lastName,
				gender: element.gender,
				state: element.state,
				city: element.city,
				nationalCode: element.nationalCode,
				dateOfBirth: element.dateOfBirth,
				contactMobile: element.contactMobile,
				contactFirstName: element.contactFirstName,
				contactLastName: element.contactLastName,
				residence: element.residence,
				contactOffice: element.contactOffice,
				educationStage: element.educationStage,
				educationLevel: element.educationLevel,
				educationMajor: element.educationMajor,
				educationType: element.educationType,
				educationStatus: element.educationStatus,
				educationInstitute: element.educationInstitute,
			},
			enabled: process.env.user_enabled,
		};
	});
};
