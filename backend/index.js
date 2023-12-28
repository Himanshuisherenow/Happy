import {app} from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/dbconnect.js";
dotenv.config({path:'./.env'})


app.get("/api/jokes",(req,res)=>{
  const jokes = [
     {
       "id": 1,
       "category": "Programming",
       "question": "Why do programmers prefer dark mode?",
       "answer": "Because light attracts bugs!"
     },
     {
       "id": 2,
       "category": "Dad Jokes",
       "question": "Why don't scientists trust atoms?",
       "answer": "Because they make up everything!"
     },
     {
       "id": 3,
       "category": "Puns",
       "question": "What do you call fake spaghetti?",
       "answer": "An impasta!"
     },
     {
       "id": 4,
       "category": "Animal Jokes",
       "question": "What do you get if you cross a cat with a dark horse?",
       "answer": "Kitty Perry!"
     },
     {
       "id": 5,
       "category": "Knock-Knock Jokes",
       "question": "Knock, knock.",
       "answer": "Who’s there? Atch. Atch who? Bless you!"
     }
   ] 

   res.send(jokes);
 })

 connectDB().then(()=>{
  app.listen(process.env.PORT || 8080,

  ()=>{
    console.log(`server is started running on PORT ${process.env.PORT}`)})}
)


  
