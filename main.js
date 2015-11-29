import yr from 'yate/lib/runtime';
import './templates/hello.js';

const data = { username: 'tank' };
const result = yr.run('hello', data);

console.log(result);