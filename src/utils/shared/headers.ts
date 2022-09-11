export const headersMap: Record<string, string> = {
	NAME: "firstName",
	FAMILY: "lastName",
	JENSIAT: "gender",
	STATE_TITLE: "state",
	CITY_TITLE: "city",
	CODE_MELI: "nationalCode",
	TARIKH_TAVALOD: "dateOfBirth",
	MOBILE_MASUL: "contactMobile",
	NAME_MASUL: "contactFirstName",
	FAMILY_MASUL: "contactLastName",
	ROSTAEI_SHAHRI_TITLE: "residence",
	LOCATION_FR_NAME: "contactOffice",
	MAGHTA_TITLE: "educationStage",
	PAYETAHSILI: "educationLevel",
	RESHTETAHSILI: "educationMajor",
	NOERESHTE: "educationType",
	VAZIATTAHSILI: "educationStatus",
	NAMEMADRESEDANESHGAH: "educationInstitute",
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
	firstName: string;
	lastName: string;
	gender: string;
	state: string;
	city: string;
	nationalCode: string;
	dateOfBirth: string;
	contactMobile: string;
	contactFirstName: string;
	contactLastName: string;
	residence: string;
	contactOffice: string;
	educationStage: string;
	educationLevel: string;
	educationMajor: string;
	educationType: string;
	educationStatus: string;
	educationInstitute: string;
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
		firstName: string;
		lastName: string;
		gender: string;
		state: string;
		city: string;
		nationalCode: string;
		dateOfBirth: string;
		contactMobile: string;
		contactFirstName: string;
		contactLastName: string;
		residence: string;
		contactOffice: string;
		educationStage: string;
		educationLevel: string;
		educationMajor: string;
		educationType: string;
		educationStatus: string;
		educationInstitute: string;
	};
	enabled?: string;
};

export type usernameListType = {
	usernameList: string[];
	csvFileUsernameList: string[];
};
