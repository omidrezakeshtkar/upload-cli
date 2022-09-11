import { englishHeader, keycloakUserFormat } from "utils/shared";

export const convertJsonDataToKeycloakFormat = (jsonArray: any[]): any[] => {
	return jsonArray.map((element: englishHeader): keycloakUserFormat => {
		return {
			firstName: element.NAME,
			lastName: element.FAMILY,
			username: element.CODE_MELI,
			credentials: [
				{ type: "password", value: element.TARIKH_TAVALOD, temporary: false },
			],
			attributes: {
				NAME: element.NAME,
				FAMILY: element.FAMILY,
				JENSIAT: element.JENSIAT,
				STATE_TITLE: element.STATE_TITLE,
				CITY_TITLE: element.CITY_TITLE,
				CODE_MELI: element.CODE_MELI,
				TARIKH_TAVALOD: element.TARIKH_TAVALOD,
				MOBILE_MASUL: element.MOBILE_MASUL,
				NAME_MASUL: element.NAME_MASUL,
				FAMILY_MASUL: element.FAMILY_MASUL,
				ROSTAEI_SHAHRI_TITLE: element.ROSTAEI_SHAHRI_TITLE,
				LOCATION_FR_NAME: element.LOCATION_FR_NAME,
				MAGHTA_TITLE: element.MAGHTA_TITLE,
				PAYETAHSILI: element.PAYETAHSILI,
				RESHTETAHSILI: element.RESHTETAHSILI,
				NOERESHTE: element.NOERESHTE,
				VAZIATTAHSILI: element.VAZIATTAHSILI,
				NAMEMADRESEDANESHGAH: element.NAMEMADRESEDANESHGAH,
			},
			enabled: process.env.user_enabled,
		};
	});
};
