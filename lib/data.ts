import postgres from 'postgres';

import { project } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function fetchProjects(): Promise<project[]> {
    try {
        const projects: project[] = await sql<project[]>`SELECT * FROM projects ORDER BY id ASC`;
        return projects;
    } catch (error) {
        console.error('Database Error:', error);
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