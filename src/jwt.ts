import jwt from 'jsonwebtoken';
import { sleep } from './helper.js';


const JWT_SECRET = 'shhhhh';
var token = jwt.sign({}, JWT_SECRET, {
  algorithm: 'HS256', // 指定签名算法
  expiresIn: '1h', // 令牌将在签发后1小时过期
  notBefore: '0', // 令牌立即生效
  subject: 'abcded', // 声明令牌主题，通常是用户ID
  jwtid: crypto.randomUUID() // 令牌ID,防止令牌重放攻击
});

console.log(token);

// Sleep for 3 seconds
await sleep(3000);

jwt.verify(token, JWT_SECRET, (err, decoded) => {
  console.log(err, decoded);
});
