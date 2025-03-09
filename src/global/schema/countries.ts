import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const countries = sqliteTable('countries', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name'),
});