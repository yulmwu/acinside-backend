import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

const User = mongoose.model('User', schema)
