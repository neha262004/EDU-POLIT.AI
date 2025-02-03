import { primaryKey } from "drizzle-orm/mysql-core";
import { pgTable } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable('user',{ 
    id: serial().primarykey(),
    name: varchar().notNull(),
    email: varchar().notNull(),
    isMember: boolean().defaultTo(false),
});
mjnjnjn;