import { AuthSession, Facebook } from 'expo'
import { getStore } from '../App'

export async function loginFB() {
  const FB_APP_ID = '1850435378409537'
  let response = undefined
  let data = {}

  response = await Facebook.logInWithReadPermissionsAsync(FB_APP_ID, {
    permissions: ['public_profile'],
  })
  console.log('response', response)

  let { type, token } = response

  data = { token }
  let status = type === 'success' ? 200 : 500

  if (status === 200) {
    // Get the user's name and ID using Facebook's Graph API
    response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    )
    status = response.status
    let result = await response.json()

    result = {
      user_id: result.id,
      user_full_name: result.name,
    }

    Object.assign(data, result)
  }

  return {
    status,
    data,
  }
}

export async function logoutFB() {
  const {
    token,
    user_id,
  } = getStore().getState().userReducers.loginReducer.data

  let response = await fetch(
    'https://graph.facebook.com/' + user_id + '/permissions',
    {
      method: 'DELETE',
      body: `access_token=${token}`,
    }
  )
  const { status } = response

  return {
    status,
    data: await response.json(),
  }
}
