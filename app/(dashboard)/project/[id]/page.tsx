import { TaskCard } from "@/components";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";

const getData = async (id: string) => {
  const user = await getUserFromCookie(cookies());
  const project =
    user &&
    (await db.project.findFirst({
      where: { id, userId: user.id },
      include: {
        tasks: true,
      },
    }));

  return project;
};

const ProjectPage = async ({ params }: any) => {
  const project = await getData(params.id);

  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      {/* @ts-expect-error Server Component */}
      <TaskCard tasks={project.tasks} title={project.name} />
    </div>
  );
};

export default ProjectPage;
