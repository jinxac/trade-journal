import { registerAs } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dbConfig = {
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ["dist/**/*.entity.js"],
  synchronize: true,
  autoLoadEntities: true,
  migrationsRun: false,
  migrationsTableName: "migrations_typeorm",
  migrations: ["dist/migrations/**/*.js"],
  cli: {
    migrationsDir: "src/migrations",
  },
} as TypeOrmModuleOptions;

export default registerAs("database", () => dbConfig);