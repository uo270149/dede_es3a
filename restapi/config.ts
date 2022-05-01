import dotenv from 'dotenv';
import path from 'path';

if (process.env.NODE_ENV != 'production') {
    dotenv.config({path: path.resolve(__dirname, '.env')});
}

const config = {
    jwt_secret: process.env.JWT_SECRET || 'unsafe_jwt_secret',
    mongoose: {
        uri: 'mongodb+srv://admin:admin1234@dede-es3a.thyhc.mongodb.net/dede?retryWrites=true&w=majority'
    },
}

export default config; 