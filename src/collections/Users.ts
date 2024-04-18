import dotenv from "dotenv";
import path from "path";
import { Access, CollectionConfig } from "payload/types";

dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user && user.role === "admin") return true;

  return {
    id: {
      equals: user.id,
    },
  };
};

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {},
  },
  access: {
    read: adminsAndUser,
    create: () => true,
    update: ({ req }) => req.user.role === "admin",
    delete: ({ req }) => req.user.role === "admin",
  },
  admin: {
    hidden: ({ user }) => user.role !== "admin",
    // defaultColumns: ["id"],
  },
  fields: [
    {
      name: "role",
      label: "Role",
      required: true,
      defaultValue: "user",
      admin: {},
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Volunteer", value: "volunteer" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
