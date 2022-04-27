import { CognitoUserPool, ICognitoUserPoolData } from 'amazon-cognito-identity-js';
import { LOGIN_PAGE, USER_POOL_ID, CLIENT_ID } from './constants';

const isLoggedIn = (): boolean => {
	const poolData: ICognitoUserPoolData = {
		UserPoolId: USER_POOL_ID,
		ClientId: CLIENT_ID
	};	

	const userPool = new CognitoUserPool(poolData);
	const user = userPool.getCurrentUser();

	return user != null;
}

if(!isLoggedIn()) {
	window.location.href = LOGIN_PAGE
}
