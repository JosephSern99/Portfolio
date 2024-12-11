'use client'

import { GitHubProject } from '../types/github';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: GitHubProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {project.language && <Badge>{project.language}</Badge>}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center">
          <Star className="w-4 h-4 mr-1" />
          <span>{project.stargazers_count}</span>
        </div>
        <Link href={project.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  );
}

