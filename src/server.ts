import express from 'express';
import { getpayloadClient } from './get_payload';
import { nextApp, nextHandler } from './next-utils';
const app = express();

const PORT = Number(process.env.port) || 3000;
const start = async () => {
  const payload = await getpayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Amin URL ${cms.getAdminURL()}`)
      },
    },
  })
  app.use((req, res) => nextHandler(req, res))
  nextApp.prepare().then(() => {
    payload.logger.info("next js started")
    app.listen(PORT, async () => {
      payload.logger.info(`Next.js app url: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
    })
  })
}
start()
