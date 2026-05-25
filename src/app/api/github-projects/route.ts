import { NextResponse } from 'next/server';
import { GitHubProject } from '@/app/types/github';

const ALLOWED_REPOS = new Set([
  'e-wallet-backend',
  'e-wallet-frontend',
  'e-wallet-env',
  'book-library-tutorial',
  'TNGHACK',
  'KAPPA-Architecture',
  'Prediction-Data',
  'Prediction Data',
])

const CUSTOM_DESCRIPTIONS: Record<string, string> = {
  'e-wallet-backend': 'Backend REST API for a digital e-wallet application — handles transactions, balances, and user accounts.',
  'e-wallet-frontend': 'React frontend for the e-wallet — user interface for managing wallet transactions and account details.',
  'e-wallet-env': 'Docker & environment configuration for the e-wallet stack, enabling consistent local and production setups.',
  'book-library-tutorial': 'Spring Boot tutorial project — a CRUD REST API for managing a book library.',
  'TNGHACK': "Touch 'n Go hackathon entry — a rapid-prototype solution built under competition constraints.",
  'KAPPA-Architecture': 'Proof-of-concept implementation of the Kappa streaming architecture for real-time data processing.',
  'Prediction-Data': 'Machine learning project for data prediction — model training, evaluation, and result visualisation.',
  'Prediction Data': 'Machine learning project for data prediction — model training, evaluation, and result visualisation.',
}

export async function GET() {
  const token = process.env.TOKEN;
  if (!token) {
    return NextResponse.json({ error: 'GitHub token is not set' }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.github.com/user/repos?per_page=100', {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub projects');
    }

    const data: GitHubProject[] = await response.json();
    const projects = data
      .filter(({ name }) => ALLOWED_REPOS.has(name))
      .map(({ id, name, description, html_url, stargazers_count, language }) => ({
        id,
        name,
        description: CUSTOM_DESCRIPTIONS[name] ?? description,
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
