import { Client } from 'faunadb';

const FAUNA_KEY = process.env.FAUNADB_KEY as string;

export const fauna = new Client({
    secret: FAUNA_KEY,
})