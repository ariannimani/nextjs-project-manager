import bcrypt from "bcrypt";
import { SignJWT, jwtVerify } from "jose";
import { db } from "./db";

export const hashPassword = (password: string | Buffer) =>
  bcrypt.hash(password, 10);

export const comparePasswords = (
  plainTextPassword: string | Buffer,
  hashedPassword: string
) => bcrypt.compare(plainTextPassword, hashedPassword);
