import { Prisma } from "@prisma/client";

const userProps = Prisma.validator<Prisma.UserArgs>()({});

export type UserProps = Prisma.UserGetPayload<typeof userProps>;

export interface UserPropsWithoutId {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const tasksProps = Prisma.validator<Prisma.TaskArgs>()({});

export type TasksProps = Prisma.TaskGetPayload<typeof tasksProps>;
