import express from "express"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"



const app = express()
console.log(process.env.test)
console.log("Hello World")

// app.get("/test",(req,res) => {
//     res.status(200).send("it works")
// })

//user route
app.use("/user", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})