

import ProjectItem from "@/components/shared/ProjectItem";


export function Projects({ projects }: { projects: any[] }) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
            {projects?.map((project, index) => (
                <ProjectItem project={project} index={index} />
            ))}
        </div>
    );
}