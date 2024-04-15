import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { inferAsyncReturnType } from "@trpc/server";
import bodyParser from "body-parser";
import { IncomingMessage } from "http";
import { getPayloadClient } from "./get-payload";
import nextBuild from "next/dist/build";
import path from "path";
import { nextApp, nextHandler } from "./next-utils";
import { appRouter } from "./trpc";

const app = express();
const PORT = Number(process.env.PORT) || 3000;
interface createContextOptions
  extends trpcExpress.CreateExpressContextOptions {}
const createContext = ({ req, res }: createContextOptions) => ({
  req,
  res,
});

export type WebHookRequest = IncomingMessage & {
  rawBody: Buffer;
};

export type ExpressContext = inferAsyncReturnType<typeof createContext>;

const start = async () => {
  // webhhook for stripe
  const webHookMiddleware = bodyParser.json({
    verify: (req: WebHookRequest, _, buffer) => {
      req.rawBody = buffer;
    },
  });

  // payload init
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  //important to build
  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(`Next is building for production on ${PORT}`);
      // @ts-expect-error
      await nextBuild(path.join(__dirname, "../"));

      process.exit();
    });

    return;
  }

  // trpc...
  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  app.use((req, res) => nextHandler(req, res));
  nextApp.prepare().then(() => {
    payload.logger.info("Next.js started");

    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      );
    });
  });
};

start();
