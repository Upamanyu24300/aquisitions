import 'dotenv/config';

import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon({ url: process.env.DATABASE_URL });

const db = drizzle(sql);