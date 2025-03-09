import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from '@/global/schema'; // Impor skema Drizzle

// Inisialisasi koneksi database
const sqlite = new Database('database/geographic.db'); // Path ke database SQLite
const db = drizzle(sqlite, { schema });

export { db };