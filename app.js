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

    // const newUser = await User.insertMany([
    //   {
    //     name: "Harshil Chavada",
    //     email: "harshilchavadatest@gmail.com",
    //     age: 22,
    //     isActive: true,
    //     tags: ["developer", "designer", "manager"],
    //   },
    //   {
    //     name: "Aanshi Chhaiya",
    //     email: "aanshichaaiya@gmail.com",
    //     age: 7,
    //     isActive: true,
    //     tags: ["youtuber", "makeup-artist", "designer"],
    //   },
    // ]);

    // await newUser.save();
    // console.log("Created new user: ", newUser);

    // const getAllUsers = await User.find({
    //   isActive: true,
    // });

    // const selectedFields = await User.find()
    //   .select("name email -_id")
    //   .limit(5)
    //   //   .skip(1);
    //   .sort({ age: 1 });

    // const countDocuments = await User.countDocuments({ age: { $gt: 10 } });

    // const deleteUser = await User.findByIdAndDelete("68860a4f45e91c33bd1af7c2");

    const updateUser = await User.findByIdAndUpdate(
      "688601aa2b0dbe7e8cbbbde7",
      {
        $set: {
          age: 7,
        },
      },
      {
        new: true,
      }
    );
    console.log(updateUser);
  } catch (e) {
  } finally {
    await mongoose.connection.close();
    console.log("Closed connection");
  }
}

runQueryExamples();
