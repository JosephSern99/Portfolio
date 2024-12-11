import { NextResponse } from 'next/server';
import { GitHubProject } from '@/app/types/github';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'GitHub token is not set' }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.github.com/user/repos', {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub projects');
    }

    const data: GitHubProject[] = await response.json();
    const projects = data.map(({ id, name, description, html_url, stargazers_count, language }) => ({
      id,
      name,
      description,
      html_url,
      stargazers_count,
      language,
    }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return NextResponse.json({ error: 'Failed to fetch GitHub projects' }, { status: 500 });
  }
}