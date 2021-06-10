import {rest} from "msw";
import {pairing} from "./pairing";
import {BASE} from "../endpoints";


export const handlers = [
  rest.get(BASE + "/pairings",
    (req, res, ctx) => {
    return res(
      ctx.json({...pairing})
    )
  }),
]