import { signedInAuthObject, verifyToken, type SignedInAuthObject } from '@clerk/backend'

export const verifySession = async (
	apiUrl: string,
	secretKey: string,
	sessionToken: string
): Promise<SignedInAuthObject | undefined> => {
	if (sessionToken) {
		const issuer = (issuer: string) =>
			issuer.startsWith('https://clerk.') || issuer.includes('.clerk.accounts')

		const claims = await verifyToken(sessionToken, {
			secretKey,
			issuer,
		})

		const authObject = signedInAuthObject(claims, {
			apiUrl: apiUrl,
			apiVersion: 'v1',
			secretKey: secretKey,
			token: sessionToken,
		})

		return authObject
	}
}
