import avatar from './image/timg.jpeg';
import './style/root.scss';
import './style/avatar.css';

console.log('hello world1')
console.log(avatar)
var img = new Image();
img.src = avatar
img.classList.add('avatar')

var root = document.getElementById('root')
root.append(img)
