import express from "express"
import connectDB from "./lib/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"



const app = express()
app.use(express.json())


//user route
app.use("/user", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.use((error,req,res,next) =>{

  req.status(error.status || 500)
  req.json({
    message:error.message || "Something went wrong",
    status:error.status,
    stack:error.status,
  }
  )
})

app.listen(3000, () => {
  connectDB()
  console.log("Server is running on port 3000")
})