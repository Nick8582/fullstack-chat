module.exports = ({ env }) => ({
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3,
    },
  },
  io: {
    enabled: true,
    config: {
      IOServerOptions: {
        cors: { origin: "*", methods: ["GET", "POST"] },
      },
      contentTypes: {
        message: "*",
        chat: ["create"],
      },
      events: [
        {
          name: "connection",
          handler: ({ strapi }, socket) => {
            strapi.log.info(`[io] new connection with id ${socket.id}`);

            socket.on("client-message", async (messageData) => {
              strapi.$io.raw("server-message", messageData);
            });
          },
        },
      ],
    },
  },
});
