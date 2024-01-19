// // npm run dev
// import * as express from "express"
// import * as path from "path"
// import * as typeorm from "typeorm"
// import {User} from "./entity/user"

// import * as bcrypt from "bcrypt";
// export const passverfy = async (pass: string, has: string) => {
  

//   return  bcrypt.compare(pass, has);
// };
// const app = express();
// console.log(__dirname);
// app.use(express.json());
// app.use("/public", express.static(__dirname+"/public"))
// const db = typeorm.createConnection({
//     type: "mysql",
//   host: "localhost",
//   port: 3306,
//   username: "root",
//   password: "admin123",
//   database: "grocerydb",
//   synchronize: true,
//   logging: true,
//   entities: ["src/entity/**/*.ts"],
//   migrations: ["src/migration/**/*.ts"],
//   subscribers: ["src/subscriber/**/*.ts"],
  
// })
// db.then(async (con)=>{
//     await con.runMigrations();
//     app.listen(8080,()=>{
//         console.log('http://localhost:8080')
//     })
//     app.get('/',(req,res)=>{
//         res.sendFile(path.join(__dirname+'/front-end/register.html'));
//     })
//     app.get('/home',(req,res)=>{
//         res.sendFile(path.join(__dirname+'/front-end/home.html'));
//     })
//     app.get('/signin',(req,res)=>{
//         res.sendFile(path.join(__dirname+'/front-end/Signin main.html'));
//     })
//     app.get('/payment',(req,res)=>{
//         res.sendFile(path.join(__dirname+'/front-end/buypay.html'));
//     })
//     app.get('/order',(req,res)=>{
//         res.sendFile(path.join(__dirname+'/front-end/ordertracking.html'));
//     })
//     app.get('/product',(req,res)=>{
//         res.sendFile(path.join(__dirname+'/front-end/product.html'));
//     })
//     app.get('/front-end/buypay.html',(req,res)=>{
//         res.sendFile(path.join(__dirname+'/front-end/buypay.html'));
//     })
//     app.get('/juice',(req,res)=>{
//         res.sendFile(path.join(__dirname+'/public/Pages/Juice.html'));
//     })
//     app.get('/front-end/ordertracking.html',(req,res)=>{
//         res.sendFile(path.join(__dirname+'/front-end/ordertracking.html'));
//     })
//     app.get('/addtocard',(req,res)=>{
//         res.sendFile(path.join(__dirname+'/public/Pages/addtocard.html'));
//     })
//     ////////////////////////////////////////////
//     app.post('/add/user',async (req,res)=>{
//         const {username,email,password,name} = req.body;
//         const userRepo = typeorm.getRepository(User);
//         try {
//             const user = userRepo.create({
//                 username,
//                 password,
//                 email,
//                 name
//             })
//             res.json(await userRepo.save(user));
//         }catch(e){
//             res.status(500).json(e)
//         }
//     })
//     app.post('/login/user',async (req,res)=>{
//         const userRepo = typeorm.getRepository(User);
//         const {username,password} = req.body;
//         const user = await userRepo.findOne({
//             where: {username:username},
//             select: [ "id", "email","username", "name", "password" ],

//         })
//         if(user){
//             console.log(user)
//             if (await passverfy(password,user.password)){
//                 res.json(user)
//             }else{
//                 res.status(500).send("username and password is invalid");
//             }
//         } else {
//             res.status(500).send("username is invalid");
//           }
//     })
// })  


// used to run with out connnection of SQL
import * as express from "express";
import * as path from "path";

const app = express();

console.log(__dirname);

app.use(express.json());
app.use("/public", express.static(__dirname + "/public"));

app.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/front-end/register.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname + '/front-end/home.html'));
});

app.get('/signin', (req, res) => {
  res.sendFile(path.join(__dirname + '/front-end/Signin main.html'));
});

app.get('/payment', (req, res) => {
  res.sendFile(path.join(__dirname + '/front-end/buypay.html'));
});

app.get('/order', (req, res) => {
  res.sendFile(path.join(__dirname + '/front-end/ordertracking.html'));
});

app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname + '/front-end/product.html'));
});

app.get('/front-end/buypay.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/front-end/buypay.html'));
});

app.get('/juice', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/Pages/Juice.html'));
});

app.get('/front-end/ordertracking.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/front-end/ordertracking.html'));
});

app.get('/addtocard', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/Pages/addtocard.html'));
});

app.post('/add/user', (req, res) => {
  const { username, email, password, name } = req.body;

  // Simulate saving the user data to a database
  const savedUser = {
    id: Math.floor(Math.random() * 1000), // Replace with actual user ID logic
    username,
    email,
    password,
    name,
  };

  res.json(savedUser);
});

app.post('/login/user', (req, res) => {
  const { username, password } = req.body;

  // Simulate checking user credentials from a database
  const mockUser = {
    username: 'demo',
    password: '$2b$10$ivmMFqF.Z4y/lJYzvsvO6e2zrS/7veNUFzUGDm7tW0/ZSWfhDTFEG', // bcrypt hash of 'password'
  };

  if (username === mockUser.username && passverfy(password, mockUser.password)) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

const passverfy = async (pass: string, hash: string) => {
  // Replace this with your actual password verification logic
  return pass === 'password'; // For demonstration purposes, always return true
};
