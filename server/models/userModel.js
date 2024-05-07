import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  paymentStatus: String,
});

export default mongoose.model("user", userSchema);
