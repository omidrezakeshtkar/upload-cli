export const headersMap: Record<string, string> = {
    'نام': 'firstName',
    'نام خانوادگی': 'lastName',
    'نام پدر': 'fatherName',
    'جنسیت': 'gender',
    'کد ملی': 'nationalCode',
    'تاریخ تولد': 'birthday',
    'نام استان': 'province',
    'اداره (سامانه)': 'organization',
    'منطقه': 'region',
    'مقطع تحصیلی': 'degree',
    'پایه تحصیلی': 'grade',
    'نام مدرسه': 'schoolName',
    'نوع مدرسه': 'schoolType',
    'کد مدرسه': 'schoolCode',
    'جنسیت مدرسه': 'schoolGender',
    'شماره موبایل': 'mobileNumber',
    'شماره تلفن سرپرست': 'parentMobileNumber'
}

export type persianHeader = {
    'نام': string,
    'نام خانوادگی': string,
    'نام پدر': string,
    'جنسیت': string,
    'کد ملی': string,
    'تاریخ تولد': string,
    'نام استان': string,
    'اداره (سامانه)': string,
    'منطقه': string,
    'مقطع تحصیلی': string,
    'پایه تحصیلی': string,
    'نام مدرسه': string,
    'نوع مدرسه': string,
    'کد مدرسه': string,
    'جنسیت مدرسه': string,
    'شماره موبایل': string,
    'شماره تلفن سرپرست': string
}

export type englishHeader = {
    'firstName': string,
    'lastName': string,
    'fatherName': string,
    'gender': string,
    'nationalCode': string,
    'birthday': string,
    'province': string,
    'organization': string,
    'region': string,
    'degree': string,
    'grade': string,
    'schoolName': string,
    'schoolType': string,
    'schoolCode': string,
    'schoolGender': string,
    'mobileNumber': string,
    'parentMobileNumber': string
}

export type keycloakUserFormat={
    firstName: string,
    lastName: string,
    username: string,
    credentials: [
        { type: string,
          value: string, 
          temporary: boolean
        }
    ],
    attributes: {
        fatherName: string,
        gender: string,
        nationalCode: string,
        birthday: string,
        province: string,
        organization: string,
        region: string,
        degree: string,
        grade: string,
        schoolName: string,
        schoolType: string,
        schoolCode: string,
        schoolGender: string,
        mobileNumber: string,
        parentMobileNumber: string
    },
    enabled: string | undefined
}
