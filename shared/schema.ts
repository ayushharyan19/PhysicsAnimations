import { pgTable, text, varchar, real, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id", { length: 36 }).primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const experimentData = pgTable("experiment_data", {
  id: varchar("id", { length: 36 }).primaryKey(),
  trial: integer("trial").notNull(),
  stretch: real("stretch").notNull(),
  time: real("time").notNull(),
  velocity: real("velocity").notNull(),
  distance: real("distance"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertExperimentDataSchema = createInsertSchema(experimentData).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertExperimentData = z.infer<typeof insertExperimentDataSchema>;
export type ExperimentData = typeof experimentData.$inferSelect;
