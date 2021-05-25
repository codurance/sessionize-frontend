import {rest} from "msw";
import {pairing} from "./pairing";

export const handlers = [
  rest.get('http://localhost:8080/pairings',
    (req, res, ctx) => {
    return res(
      ctx.json({...pairing})
    )
  }),
]