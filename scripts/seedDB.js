import * as mongoose from 'mongoose';
import * as db from '../models';

// This file empties the Books collection and inserts the artists below
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
);

const artistSeed = [
    {
        username: 'test001',
        password: 'test001',
        email: 'test001@test.com',
        firstName: 'yada',
        lastName: 'yada',
    }
]
