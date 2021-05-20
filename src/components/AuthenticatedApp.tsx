import React from 'react'

export const AuthenticatedApp = ({user, logout} : any) => {
  return (
    <>
      <h1>
        {`Hello, ${user.name}!`}
      </h1>
      <button onClick={logout}>
        Logout
      </button>
    </>
  )
}