import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
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
    profilePicture: {
        type: String,
        default:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    isAdmin: { //cookie includes isAdmin para but its encrypted, so others cant change it to manipulate our backend, but they can change the front-end isAdmin to true, but it doesn't give them any privilage because in the backend they not allowed to do anything. Backend gona check the cookie not storage/redux
      type: Boolean,
      default: false,
    },
}, { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;