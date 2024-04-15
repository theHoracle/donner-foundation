import { appRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "./api/trpc",
    router: appRouter,
    req: req,
    //  @ts-ignore  context is already passed
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
