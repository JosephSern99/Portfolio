import { GitHubProject } from '../types/github'
import ProjectCard from './Project-card'

async function getGitHubProjects(): Promise<GitHubProject[]> {
  const apiUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_API_URL
      : 'http://localhost:3000'

  const res = await fetch(`${apiUrl}/api/github-projects`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch projects')
  return res.json()
}

export default async function GitHubProjects() {
  const projects = await getGitHubProjects()

  return (
    <section className="mb-16">
      <h2 className="section-heading">GitHub Projects</h2>
      <p className="section-subheading">Open source work</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
