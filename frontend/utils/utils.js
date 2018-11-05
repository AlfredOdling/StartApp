const ngrokLocalhost = 'https://2303e747.ngrok.io'

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
