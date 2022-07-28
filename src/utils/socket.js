import io from 'socket.io-client';
const host = 'https://7e420i.sse.codesandbox.io/';
const socket = io.connect(host);
export default socket;
