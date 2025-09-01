import postgres from 'postgres';
import { project } from './definitions';

// Use the standard DATABASE_URL environment variable name
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is required');
}

const sql = postgres(connectionString, { 
  ssl: process.env.NODE_ENV === 'production' ? 'require' : 'allow' 
});

export async function fetchProjects(): Promise<project[]> {
    try {
        // Try to fetch from database
        const projects: project[] = await sql<project[]>`SELECT * FROM projects ORDER BY id ASC`;
        return projects;
    } catch (error) {
        console.error('Database Error:', error);
        
        // Return empty array during build to prevent build failure
        if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
            console.warn('Using fallback empty projects array due to database error');
            return [];
        }
        
        throw new Error('Failed to fetch the latest projects.');
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