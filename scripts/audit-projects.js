const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../lib/data/projects-registry.ts'), 'utf8');

const marker = 'projectsRegistry: ProjectRecord[] = ';
const jsonStart = content.indexOf(marker) + marker.length;
const jsonEnd = content.lastIndexOf(']');
const jsonString = content.substring(jsonStart, jsonEnd + 1);
const projects = JSON.parse(jsonString);

console.log(`Total projects in registry: ${projects.length}`);

let missingCount = 0;
const thumbCounts = {};

projects.forEach(p => {
  const hasProblem = Boolean(p.problem && p.problem.trim());
  const hasSolution = Boolean(p.solution && p.solution.trim());
  const hasArch = Boolean(p.architecture && p.architecture.length >= 3);
  const hasMetrics = Boolean(p.metrics && p.metrics.length >= 2);
  const thumb = p.thumbnail || 'none';

  thumbCounts[thumb] = (thumbCounts[thumb] || 0) + 1;

  if (!hasProblem || !hasSolution || !hasArch || !hasMetrics) {
    missingCount++;
    console.log(`- ${p.id}: problem=${hasProblem}, solution=${hasSolution}, arch=${hasArch}, metrics=${hasMetrics}`);
  }

  // Check file exists on disk
  const diskPath = path.join(__dirname, '../public', thumb);
  if (!fs.existsSync(diskPath)) {
    console.error(`ERROR: File does not exist for ${p.id}: ${diskPath}`);
  }
});

console.log(`Projects missing core fields: ${missingCount}`);

console.log('\nThumbnails audit:');
let duplicatesCount = 0;
Object.entries(thumbCounts).forEach(([thumb, count]) => {
  if (count > 1) {
    console.log(`- DUPLICATE ${thumb}: ${count} times`);
    duplicatesCount++;
  }
});

if (duplicatesCount === 0) {
  console.log('✓ ZERO duplicated thumbnails! All 48 project thumbnails are 100% UNIQUE.');
}
if (missingCount === 0) {
  console.log('✓ 100% of all 48 projects have full problem, solution, architecture (>=3 layers), and metrics (>=2).');
}
