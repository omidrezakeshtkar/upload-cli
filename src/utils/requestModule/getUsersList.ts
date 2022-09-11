import axios from "axios";
import { getAccessToken } from "utils/requestModule";
import { usernameListType } from "utils/shared";

export const getUsersListFromKeycloak = async (accessToken: string) => {
	const response = await axios({
		method: "get",
		url: `${process.env.keycloak_address}/auth/admin/realms/${process.env.keycloak_realm}/users`,
		headers: { Authorization: accessToken },
	});
	return response.data;
};

export const getUserNameList = async (
	requestArray: string[]
): Promise<usernameListType> => {
	const accessToken = await getAccessToken();
	const existingKeycloakUsers = await getUsersListFromKeycloak(accessToken);
	const usernameList: string[] = existingKeycloakUsers.map(
		(user: any) => user.username
	);
	const csvFileUsernameList: string[] = requestArray.map(
		(user: any) => user.username
	);
	return { usernameList, csvFileUsernameList };
};
