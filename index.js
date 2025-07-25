import DB_Connection from "./DB_Connection.js";
import express from "express";
import cors from "cors"
import productRoutes from "./routes/product.route.js"
import fileUpload from "express-fileupload";


const app = express();

app.use(cors())

DB_Connection();


app.use(express.json())

app.use(fileUpload({
  useTempFiles:true
}))
 

app.get("/",(req, res) => {
  console.log("index connected...")
  res.send({ message: "connected..."});
});

app.use("/products", productRoutes)

const port = process.env.PORT | 4000

app.listen(port, () => {
  console.log("server is running in ",port);
});

