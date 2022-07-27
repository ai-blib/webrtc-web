import io from 'socket.io-client';
const host = 'https://websrtc-server.vercel.app';
const socket = io.connect(host);
export default socket;
