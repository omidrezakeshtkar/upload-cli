export const headersMap: Record<string, string> = {
	"NAME":"NAME",
	"FAMILY":"FAMILY",
	"JENSIAT":"JENSIAT",
	"STATE_TITLE":"STATE_TITLE",
	"CITY_TITLE":"CITY_TITLE",
	"CODE_MELI":"CODE_MELI",
	"TARIKH_TAVALOD":"TARIKH_TAVALOD",
	"MOBILE_MASUL":"MOBILE_MASUL",
	"NAME_MASUL":"NAME_MASUL",
	"FAMILY_MASUL":"FAMILY_MASUL",
	"ROSTAEI_SHAHRI_TITLE":"ROSTAEI_SHAHRI_TITLE",
	"LOCATION_FR_NAME":"LOCATION_FR_NAME",
	"MAGHTA_TITLE":"MAGHTA_TITLE",
	"PAYETAHSILI":"PAYETAHSILI",
	"RESHTETAHSILI":"RESHTETAHSILI",
	"NOERESHTE":"NOERESHTE",
	"VAZIATTAHSILI":"VAZIATTAHSILI",
	"NAMEMADRESEDANESHGAH":"NAMEMADRESEDANESHGAH",
};

export type persianHeader = {
	نام: string;
	"نام خانوادگی": string;
	"نام پدر": string;
	جنسیت: string;
	"کد ملی": string;
	"تاریخ تولد": string;
	"نام استان": string;
	"اداره (سامانه)": string;
	منطقه: string;
	"مقطع تحصیلی": string;
	"پایه تحصیلی": string;
	"نام مدرسه": string;
	"نوع مدرسه": string;
	"کد مدرسه": string;
	"جنسیت مدرسه": string;
	"شماره موبایل": string;
	"شماره تلفن سرپرست": string;
};

export type englishHeader = {
	NAME: string;
	FAMILY: string;
	JENSIAT: string;
	STATE_TITLE: string;
	CITY_TITLE: string;
	CODE_MELI: string;
	TARIKH_TAVALOD: string;
	MOBILE_MASUL: string;
	NAME_MASUL: string;
	FAMILY_MASUL: string;
	ROSTAEI_SHAHRI_TITLE: string;
	LOCATION_FR_NAME: string;
	MAGHTA_TITLE: string;
	PAYETAHSILI: string;
	RESHTETAHSILI: string;
	NOERESHTE: string;
	VAZIATTAHSILI: string;
	NAMEMADRESEDANESHGAH: string;
};

export type keycloakUserFormat = {
	firstName: string;
	lastName: string;
	username: string;
	credentials: [
		{
			type: string;
			value: string;
			temporary: boolean;
		}
	];
	attributes: {
		NAME: string;
		FAMILY: string;
		JENSIAT: string;
		STATE_TITLE: string;
		CITY_TITLE: string;
		CODE_MELI: string;
		TARIKH_TAVALOD: string;
		MOBILE_MASUL: string;
		NAME_MASUL: string;
		FAMILY_MASUL: string;
		ROSTAEI_SHAHRI_TITLE: string;
		LOCATION_FR_NAME: string;
		MAGHTA_TITLE: string;
		PAYETAHSILI: string;
		RESHTETAHSILI: string;
		NOERESHTE: string;
		VAZIATTAHSILI: string;
		NAMEMADRESEDANESHGAH: string;
	};
	enabled?: string;
};

export type usernameListType = {
	usernameList: string[];
	csvFileUsernameList: string[];
};
