const mongoose = require("mongoose");
//const MONGO_URL = "mongodb://localhost/react-mt";
const MONGO_URL = 'mongodb+srv://react-mt:123@cluster0.8peaigu.mongodb.net/test';

// mongodb+srv://react-mt:<password>@cluster0.8peaigu.mongodb.net/test
const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("               📅 DB funcionando 📅"))
    .catch((error) => console.log(error));
};
module.exports= db