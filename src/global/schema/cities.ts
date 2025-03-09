import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import {countries} from "@/global/schema/countries";
export const cities = sqliteTable('cities', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name'),
    countryId: integer('country_id')
        .references(() => countries.id, { onDelete: 'no action', onUpdate: 'no action' }),
});