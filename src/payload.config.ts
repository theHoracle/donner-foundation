import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import path from "path";
import dotenv from "dotenv";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { Causes } from "./collections/Causes/Causes";
import { Donations } from "./collections/Donations";
import { User } from "./payload-types";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});
export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users, Media, Causes, Donations],
  routes: {
    admin: "/admin",
  },
  admin: {
    user: 'users',
    bundler: webpackBundler(),
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
