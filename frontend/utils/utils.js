  const ngrokLocalhost = 'https://4bc201b1.ngrok.io'

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
  const { statusText, status } = response

  return {
    errorMsg: statusText,
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
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const { statusText, status } = response

  return {
    errorMsg: statusText,
    status,
    data: await response.json(),
  }
}
