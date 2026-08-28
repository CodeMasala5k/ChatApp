const socket = io('http://localhost:8000')

const form = document.getElementById("send-container")
const messageInput = document.getElementById("messageInp")
const messageContainer = document.querySelector(".container")
var sent = new Audio("sent.mp3")
var notification = new Audio("notification.mp3")

const append = (message, position) =>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);

    messageContainer.append(messageElement);
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');
    sent.play();
    socket.emit('send', message)
    messageInput.value = ""
})

const personName = prompt("Enter your name to to join: ");
socket.emit('new-user-joined', personName);


socket.on('user-joined', name=>{
    append(`${name} joined the chat`, 'right')
})

socket.on('receive', data =>{
    append(`${data.name}: ${data.message}`, 'left')
    notification.play();
})
socket.on('left', name =>{
    append(`${name} left the chat`, 'left')
})