const post = async (url: string, options : any) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${options.accessToken}`
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(options.body)
  })
  return response.json()
}

export default post