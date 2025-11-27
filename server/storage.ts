import { type User, type InsertUser, type ExperimentData, type InsertExperimentData } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllExperimentData(): Promise<ExperimentData[]>;
  getExperimentDataByTrial(trial: number): Promise<ExperimentData | undefined>;
  createExperimentData(data: InsertExperimentData): Promise<ExperimentData>;
}

const defaultExperimentData: ExperimentData[] = [
  { id: '1', trial: 1, stretch: 5, time: 1.42, velocity: 0.70, distance: 1.0 },
  { id: '2', trial: 2, stretch: 7, time: 1.20, velocity: 0.83, distance: 1.0 },
  { id: '3', trial: 3, stretch: 10, time: 1.05, velocity: 0.95, distance: 1.0 },
  { id: '4', trial: 4, stretch: 12, time: 0.92, velocity: 1.09, distance: 1.0 },
  { id: '5', trial: 5, stretch: 15, time: 0.80, velocity: 1.25, distance: 1.0 },
  { id: '6', trial: 6, stretch: 18, time: 0.72, velocity: 1.39, distance: 1.0 },
  { id: '7', trial: 7, stretch: 20, time: 0.65, velocity: 1.54, distance: 1.0 },
  { id: '8', trial: 8, stretch: 22, time: 0.60, velocity: 1.67, distance: 1.0 },
  { id: '9', trial: 9, stretch: 25, time: 0.55, velocity: 1.82, distance: 1.0 },
  { id: '10', trial: 10, stretch: 28, time: 0.50, velocity: 2.00, distance: 1.0 },
];

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private experimentData: Map<string, ExperimentData>;

  constructor() {
    this.users = new Map();
    this.experimentData = new Map();
    
    defaultExperimentData.forEach(data => {
      this.experimentData.set(data.id, data);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllExperimentData(): Promise<ExperimentData[]> {
    return Array.from(this.experimentData.values()).sort((a, b) => a.trial - b.trial);
  }

  async getExperimentDataByTrial(trial: number): Promise<ExperimentData | undefined> {
    return Array.from(this.experimentData.values()).find(
      (data) => data.trial === trial,
    );
  }

  async createExperimentData(insertData: InsertExperimentData): Promise<ExperimentData> {
    const id = randomUUID();
    const data: ExperimentData = { ...insertData, id, distance: insertData.distance ?? null };
    this.experimentData.set(id, data);
    return data;
  }
}

export const storage = new MemStorage();
