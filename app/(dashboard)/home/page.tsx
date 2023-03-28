import {
  Greetings,
  GreetingsSkeleton,
  ProjectCard,
  TaskCard,
} from "@/components";
import NewProject from "@/components/new-project/NewProject";
import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
// import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

const getData = async () => {
  await delay(2000);
  const user = {
    firstName: "Arian",
    id: "173694f1-a84a-4388-9b86-4f6a9066459e",
  }; //await getUserFromCookie(cookies())

  const projects = await db.project.findMany({
    where: {
      userId: user.id,
    },
    include: { tasks: true },
  });
  return { projects };
};

export default async function Page() {
  const { projects } = await getData();
  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      <div className=" h-full  items-stretch min-h-[content]">
        <div className="flex-1 grow flex">
          <Suspense fallback={<GreetingsSkeleton />}>
            {/* @ts-expect-error Server Component */}
            <Greetings />
          </Suspense>
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          {projects.map((project) => (
            <div className="w-1/3 p-3" key={project.id}>
              <Link href={`/project/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}
          <div className="w-1/3 p-3">
            <NewProject />
          </div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">
            {/* <TaskCard tasks={project.tasks}/> */}
          </div>
        </div>
      </div>
    </div>
  );
}
