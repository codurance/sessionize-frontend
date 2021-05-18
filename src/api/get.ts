const get = async (url: string, options : any) => {
  return await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${options.tokenId}`
    },
    referrerPolicy: 'no-referrer',
  })
}

export default get