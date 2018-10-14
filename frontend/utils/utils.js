/*
   EXAMPLE USE:

  callGetOrders = async () => {
    this.setState({
      orders: await callGet('orders'),
    })
  }
*/

export async function callGet(route) {
  const response = await fetch(route)
  const { statusText, status } = response

  if (status !== 200) {
    console.error(statusText)
    return []
  } else {
    return await response.json()
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
  console.log('====================================');
  console.log('route, body', route, body);
  console.log('====================================');

  const ngrokLocalhost = 'http://60476f93.ngrok.io'
  const response = await fetch(ngrokLocalhost + route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const { statusText, status } = response
  console.log('====================================');
  console.log('response', response);
  console.log('====================================');

  if (status !== 200) { console.error(statusText) }

  return status
}
