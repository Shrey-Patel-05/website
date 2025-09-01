import postgres from 'postgres';
import { project } from './definitions';
import { GitHub } from '@mui/icons-material';

const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

let sql: any = null;

// Don't throw error - use graceful fallback
if (connectionString) {
  try {
    sql = postgres(connectionString, { 
      ssl: process.env.NODE_ENV === 'production' ? 'require' : 'allow' 
    });
  } catch (error) {
    console.warn('Database connection failed, using fallback mode:', error);
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
        
        const projects: project[] = await sql<project[]>`SELECT * FROM projects ORDER BY id ASC`;
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
        const projects: project[] = await sql<project[]>`
      SELECT * FROM projects WHERE id = ${id}
    `;
        return projects[0] || null;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the latest projects.');
    }
}