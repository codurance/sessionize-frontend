import {render} from '@testing-library/react'
import App from "../App";
import React from "react";

describe('App', () => {
  it('should render the button', () => {
    const {getByRole} = render(<App />)
    expect(getByRole('button',  {name: 'Login with Google'})).toBeInTheDocument()
  })
})
