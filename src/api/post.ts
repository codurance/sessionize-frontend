const post = async (url: string, options : any) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${options.tokenId}`
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(options.body)
  })
  return response
}

export default post