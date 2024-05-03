import { Access, CollectionConfig } from "payload/types"

const yourOwn: Access = ({ req: { user } }) => {
    if (user.role === "admin") {
      return true;
    }
    return {
      user: {
        equals: user?.id,
      },
    };
  };

export  const Donations: CollectionConfig = {
    slug: 'donations',
    admin: {
        useAsTitle: 'Your Donations',
        description: 'A summary of all your donations'
    },
    access: {
        read: yourOwn,
        update: ({ req }) => req.user.role === "admin",
    delete: ({ req }) => req.user.role === "admin",
    create: ({ req }) => req.user.role === "admin",
    },
    fields: [
        {
            name: '_isPaid',
            type: 'checkbox',
            access: {
                read: ({req}) => req.user.role === 'admin',
                create: () => false,
                update: () => false
            },
            admin: {
                hidden: true
            },
            required: true
        },
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            admin: {
                hidden: true
            }

        },
        {
            name: 'amount',
            type: 'number',
            required: true,
            access: {
                read: ({req}) => req.user.role === 'admin',
                create: () => false,
                update: () => false
            },
        },
        {
            name: 'causes',
            type: 'relationship',
            relationTo: 'causes',
            required: true,
            admin: {
                hidden: true
            }
        }
    ]

}