import { Server } from 'socket.io';

import MessageModel from './models/message.model.js';

let io;

export const init = (httpServer) => {
  io = new Server(httpServer);

  io.on('connection', async (clientSocket) => {
    console.log(`Nuevo cliente socket conectado 🚀 (${clientSocket.id})`);
    const messages = await MessageModel.find({});
    clientSocket.emit('update-messages', messages);

    clientSocket.on('new-message', async (msg) => {
      console.log('msg? ==', msg);
      await MessageModel.create(msg);
      const messages = await MessageModel.find({});
      io.emit('update-messages', messages);
    });

  });
};/*import { Server } from 'socket.io';
import ProductManager from './classes/productManager.classes.js';

let socketServer
let store

const productManager = new ProductManager

export const init = (httpServer) => {
  socketServer = new Server(httpServer);

  socketServer.on('connection', (socketClient) => {
    console.log(`Nuevo cliente socket conectado ${socketClient.id} `);

    socketClient.emit("products", store)

    socketClient.on('newProduct', (newProduct) => {
      
      productManager.addProducts(newProduct)
      socketServer.emit("products", store)
    });
  });
}

export const emit = (data) => { 
  store = data
}*/
