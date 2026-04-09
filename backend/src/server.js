import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
 
const app = express();
// const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: '*',
//   },
// });
// app.use(cors());
// app.use(bodyParser.json());
app.set('port', process.env.PORT || 5000);

