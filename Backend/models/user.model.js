import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Full name of the user
  email: { type: String, unique: true, required: true }, // Unique email
  password: { type: String, required: true }, // Hashed password
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true }, // Gender
  age: { type: Number, required: true }, // Age
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;
