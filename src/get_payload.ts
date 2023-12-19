import dotenv from 'dotenv';
import path from 'path';
import type {
  InitOptions
} from 'payload/config';
import payload from 'payload';
dotenv.config({
  path: path.resolve(__dirname, "../env")
})
let catched = (global as any).payload
if (!catched) {
  catched = (global as any).payload = {
    client: null,
    promise: null,
  }
}
interface Args {
  initOptions?: Partial<InitOptions>
}

export const getpayloadClient = async ({ initOptions, }: Args = {}) => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('payload_SECRET is missing')
  }
  if (catched.client) {
    return catched.client
  }
  if (!catched.client) {
    catched.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {})
    })

  }
  try {
    catched.client = await catched.promise
  } catch (e: unknown) {
    catched.promise = null
    throw e
  }
  return catched.client
}