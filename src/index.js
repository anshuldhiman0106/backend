import connectDB from "./db/index.js";
import dotenv from 'dotenv';
import dns from 'node:dns';
// Force Cloudflare or Google Public DNS
dns.setServers(['1.1.1.1', '8.8.8.8']); 


dotenv.config({
    path : './.env'
}
);


connectDB();