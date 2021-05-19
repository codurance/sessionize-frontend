const get = async (url: string, options : any) => {
  return await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${options.tokenId}`
    },
    referrerPolicy: 'no-referrer',
  })
}

export default get