

import ProjectItem from "@/components/shared/ProjectItem";


export function Projects({ projects }: { projects: any[] }) {
    console.log(projects);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
                <ProjectItem key={index} project={project} index={index} />
            ))}
        </div>
    );
}