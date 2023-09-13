const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { Server } = require("socket.io");
const http = require("http");
const { swaggerSpec } = require("./utils/swaggerSpec");
const swaggerUi = require("swagger-ui-express");

const app = express();
const corsOptions = {
  origin: ["http://localhost:5173", "http://dev.weworkwave.net"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));
const router = require("./routes/routes");
app.use("/api", router);
app.use("/api/v1-doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let users = [];
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === Number(userId));
};
io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected");
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  // send and get message
  console.log(users);
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    // console.log(user);

    if (user) {
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
      console.log(`Mensaje enviado a ${user.socketId}`);
    } else {
      console.log(`Usuario con ID ${receiverId} no encontrado.`);
    }
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

module.exports = server;
