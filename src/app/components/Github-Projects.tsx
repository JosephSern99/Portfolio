import { GitHubProject } from '../types/github';
import ProjectCard from './Project-card';

async function getGitHubProjects(): Promise<GitHubProject[]> {
  const res = await fetch('http://localhost:3000/api/github-projects', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
  return res.json();
}

export default async function GitHubProjects() {
  const projects = await getGitHubProjects();

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My GitHub Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

