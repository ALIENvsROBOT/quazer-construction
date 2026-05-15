import fs from 'node:fs/promises';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const index = path.join(dist, 'index.html');
const fallback = path.join(dist, '404.html');

await fs.copyFile(index, fallback);
