const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name"],
    },
    email: {
      type: String,
      require: [true, "please enter an Email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      require: [true, "password is required"],
      minLength: [6, "Password must be up to 6 characters"],
      // maxLength: [20, "Password must not be  more than 20 characters"],
    },
    photo: {
      type: String,
      require: [true, "Please add a photo"],
      default: "https://i.ibb.co/4pDNDk1/avatar.png",
    },
    phone: {
      type: String,
      default: "+977",
    },
    bio: {
      type: String,
      default: "bio",
      maxLength: [250, "Bio must not be  more than 250 characters"],
    },
  },
  {
    timestamps: true,
  }
);
//Encrypt the password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
