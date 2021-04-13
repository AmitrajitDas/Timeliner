import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: 'string', required : true},
    email: { type: 'string', required : true},
    password: { type: 'string', required : true},
    id: { type: 'string' }
})

export default mongoose.model("User", userSchema);