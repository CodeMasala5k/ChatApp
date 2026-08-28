# ChatIn

ChatIn is a simple real-time chat application built with HTML, CSS, JavaScript, Node.js, and Socket.IO. Users can join from separate browser tabs and exchange messages instantly.

## Features

- Real-time messaging with Socket.IO
- Join and leave notifications
- User name prompts
- Sent and received message styling
- Audio notifications for sent and received messages
- Responsive, image-based chat interface

## Prerequisites

- [Node.js](https://nodejs.org/) and npm
- A local static web server, such as the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension

## Project Structure

```text
Chatapp/
├── css/
│   └── style.css
├── js/
│   └── client.js
├── nodeServer/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── index.html
├── logo.png
├── ChatBG.jpg
├── WhatsAppBG.jpeg
├── sent.mp3
└── notification.mp3
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Chatapp
```

### 2. Install server dependencies

```bash
cd nodeServer
npm install
```

### 3. Start the Socket.IO server

```bash
npm run nodemon
```

The backend runs on:

```text
http://localhost:8000
```

Keep this terminal running while using the application.

### 4. Start the frontend

From the project root, open `index.html` using Live Server in VS Code:

1. Open the project folder in VS Code.
2. Right-click `index.html`.
3. Select **Open with Live Server**.

The frontend usually opens at:

```text
http://127.0.0.1:5500/
```

Do not open `http://localhost:8000` as the chat page. Port `8000` is used by the Socket.IO backend, while Live Server hosts the frontend.

## Using the Chat

1. Open the Live Server URL.
2. Enter your name when prompted.
3. Open the same URL in another browser tab or incognito window.
4. Enter a different name.
5. Send messages between the two windows.

## Troubleshooting

### Messages are not appearing in another tab

- Confirm that the Node.js server is still running.
- Refresh both frontend tabs.
- Make sure both tabs use the Live Server URL.
- Check the browser console for connection or CORS errors.
- Use `http://localhost:5500/` or `http://127.0.0.1:5500/`, which are configured by the server.

### Port 8000 is already in use

Stop the process using port `8000`, or change the port in `nodeServer/index.js` and update the Socket.IO URL in `index.html` and `js/client.js`.

## Technical Notes

- Messages are broadcast to other connected users and are not stored in a database.
- There is no authentication or persistent chat history.
- The server keeps connected users in memory, so the list resets whenever the server restarts.

## License

This project is licensed under the ISC License.
