// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('server/db.json');
// const middlewares = jsonServer.defaults();
// const db = require('./db.json');
// const fs = require('fs');
//
// server.use(middlewares);
// server.use(jsonServer.bodyParser);
//
//
// server.post('/register', (req: any, res: any) => {
//   // console.log('register Body', req.body)
//   console.log(4)
//   const users = readUsers()
//   const user = users.filter((u: any) => u.emailId === req.body.emailId)[0];
//   // console.log('users ', users, '   user   ', user);
//   // return res.send('User register successfully');
//   if (!user) {
//     // db.users.push(req.body);
//     // server.post('/users', user);
//     fs.writeFileSync('./db.json', JSON.stringify(req.body));
//     res.status(200).send('User registration successfully');
//   } else {
//     res.status(500).send('User already exists');
//   }
// });
// server.use(router);
// server.listen(3000, () => {
//   console.log('JSON Server is running');
// });
//
// const readUsers = () => {
//   console.log(5)
//   const dbRaw = fs.readFileSync('./server/db.json');
//   return JSON.parse(dbRaw).users;
// }
//
//
// const writeUser = (user: any) => {
//   fs.writefile('./server/db.json', user);
// }
