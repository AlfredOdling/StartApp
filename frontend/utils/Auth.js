import { AuthSession } from 'expo'

export async function checkAuth() {
  const FB_APP_ID = '1850435378409537'

  let redirectUrl = AuthSession.getRedirectUrl()
  let response = await AuthSession.startAsync({
    authUrl:
      `https://www.facebook.com/v2.8/dialog/oauth?response_type=token` +
      `&client_id=${FB_APP_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}`,
  })

  const { errorCode, type } = response

  return {
    errorMsg: errorCode,
    status: type === 'success' ? 200 : 500,
    data: response,
  }
}
