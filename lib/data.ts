import postgres, { Sql } from 'postgres';
import { project } from './definitions';

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

// Use the correct Postgres type instead of 'any'
let sql: Sql | null = null;

if (connectionString) {
  try {
    sql = postgres(connectionString, { 
      ssl: process.env.NODE_ENV === 'production' ? 'require' : 'allow' 
    });
  } catch (error) {
    console.warn('Database connection failed:', error);
  }
} else {
  console.warn('No database connection string found. Using fallback mode for build.');
}

// Mock data for build time
const mockProjects: project[] = [
  {
    id: "1",
    description: "This is a sample project for demonstration",
    name:"",
    github:"",
    image:"",

  }
];

export async function fetchProjects(): Promise<project[]> {
    try {
        // Return empty array during build to prevent SSR issues
        if (typeof window === 'undefined') {
            return [];
        }
        
        if (!sql) {
            console.warn('No database connection available, using mock data');
            return mockProjects;
        }
        
        const projects = await sql<project[]>`SELECT * FROM projects ORDER BY id ASC`;
        return projects;
    } catch (error) {
        console.error('Database Error:', error);
        console.warn('Falling back to mock projects data');
        return mockProjects;
    }
}

export async function fetchProjectByID(id?: string): Promise<project | null> {
    if (!id) {
        console.warn("fetchProjectByID called with undefined id");
        return null;
    }

    try {
        if (!sql) {
            console.warn('No database connection available, using mock data');
            return mockProjects.find(p => p.id === id) || null;
        }
        
        const projects = await sql<project[]>`
            SELECT * FROM projects WHERE id = ${id}
        `;
        return projects[0] || null;
    } catch (error) {
        console.error('Database Error:', error);
        console.warn('Falling back to mock project data');
        return mockProjects.find(p => p.id === id) || null;
    }
}