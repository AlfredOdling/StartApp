import { AuthSession, Facebook } from 'expo'
import { getStore } from '../App'
const ngrokLocalhost = 'https://3871bd2b.ngrok.io'
const FB_APP_ID = '1850435378409537'

/*
   EXAMPLE USE:

  callGetOrders = async () => {
    this.setState({
      orders: await callGet('orders'),
    })
  }
*/

export async function callGet(route) {
  const response = await fetch(ngrokLocalhost + route)
  const { status } = response

  return {
    status,
    data: await response.json(),
  }
}

/*
   EXAMPLE USE:

    let route = '/upload_customer'
    let body = {
      cust_customer_id,
      cust_customer_name
    }

    const status = await callPost(route, body)
    if (status === 200) {
      this.setState({
        cust_customer_id: '',
        cust_customer_name: '',
      })
      this.callGetCustomers()
    } else {
      alert('Error, check console')
    }
*/

export async function callPost(route, body) {
  const response = await fetch(ngrokLocalhost + route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })

  const { status } = response

  return {
    status,
    data: await response.json(),
  }
}

export async function uploadImageAsync(uri) {
  let apiUrl = 'https://file-upload-example-backend-dkhqoilqqn.now.sh/upload'

  // Note:
  // Uncomment this if you want to experiment with local server
  //
  // if (Constants.isDevice) {
  //   apiUrl = `https://your-ngrok-subdomain.ngrok.io/upload`;
  // } else {
  //   apiUrl = `http://localhost:3000/upload`
  // }

  let uriParts = uri.split('.')
  let fileType = uriParts[uriParts.length - 1]

  let formData = new FormData()
  formData.append('photo', {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  })

  let options = {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  }

  const response = await fetch(apiUrl, options)
  const { statusMessage, status } = response

  return {
    errorMsg: statusMessage,
    status,
    data: await response.json(),
  }
}

export async function loginFB() {
  let response = await Facebook.logInWithReadPermissionsAsync(FB_APP_ID, {
    permissions: ['public_profile'],
  })
  const { type, token } = response

  let returnStatement = {
    status: type === 'success' ? 200 : 500,
    data: { token },
  }

  if (type === 'success') {
    returnStatement = getUserInfoFB(token, returnStatement.data)
  }

  return returnStatement
}

async function getUserInfoFB(token, data) {
  // Get the user's name and ID using Facebook's Graph API
  const response = await fetch(
    `https://graph.facebook.com/me?access_token=${token}`
  )

  const { status } = response
  const { id, name } = await response.json()

  const result = {
    user_id: id,
    user_full_name: name,
  }

  // Append { token } with result
  Object.assign(data, result)

  return {
    status,
    data,
  }
}

export async function logoutFB() {
  const { token, id } = getStore().getState().userReducer.data

  let response = await fetch(
    'https://graph.facebook.com/' + id + '/permissions',
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
