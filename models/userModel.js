import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg",
  },
  address: {
    type: Object,
    default: {
        line1: "",
        line2: "",
    }
  },
  gender: {
    type: String,
    default: "Not selected",
  },
  dob: {
    type: String,
    default: "Not selected",
  },
  phone:{
    type: String,
    default: "0000000000",
  }
});

const userModel = mongoose.model.user || mongoose.model("user", userSchema);
export default userModel;
