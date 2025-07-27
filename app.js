require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.error(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    // const newUser = await User.create({
    //   name: "Harshil Chavada",
    //   email: "harshilchavadatest@gmail.com",
    //   age: 22,
    //   isActive: true,
    //   tags: ["developer", "designer", "manager"],
    // });

    const newUser = new User({
      name: "Harshil Chavada",
      email: "harshilchavadatest@gmail.com",
      age: 22,
      isActive: true,
      tags: ["developer", "designer", "manager"],
    });

    await newUser.save();

    console.log("Created new user: ", newUser);
  } catch (e) {
  } finally {
    console.log("Closed connection");
    await mongoose.connection.close();
  }
}

runQueryExamples();
