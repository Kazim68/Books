import mongoose from 'mongoose';

const connect = async (url) => {
    return await mongoose.connect(url);
}

export default connect;