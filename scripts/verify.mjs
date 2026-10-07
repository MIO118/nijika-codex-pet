import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(readFileSync(join(root, 'pet.json'), 'utf8'));
const image = readFileSync(join(root, 'spritesheet.webp'));

assert.equal(manifest.id, 'nijika--amia');
assert.equal(manifest.displayName, '虹夏');
assert.equal(manifest.spriteVersionNumber, 2);
assert.equal(manifest.spritesheetPath, 'spritesheet.webp');
assert.equal(image.toString('ascii', 0, 4), 'RIFF');
assert.equal(image.toString('ascii', 8, 12), 'WEBP');
assert.equal(image.toString('ascii', 12, 16), 'VP8L');
assert.equal(image[20], 0x2f);
assert.ok(image.length <= 5_000_000);

const dimensions = image.readUInt32LE(21);
const width = (dimensions & 0x3fff) + 1;
const height = ((dimensions >>> 14) & 0x3fff) + 1;
assert.deepEqual([width, height], [1536, 2288]);

const digest = createHash('sha256').update(image).digest('hex');
assert.equal(digest, '85e14504b95e92ea77c362174bb1979a8a067f55a67b1915f33721eaa66451f9');

const testHome = mkdtempSync(join(tmpdir(), 'nijika install check-'));
try {
  execFileSync(process.execPath, [join(root, 'install.mjs'), 'install', 'nijika--amia', '--codex-home', testHome]);
  const installed = readFileSync(join(testHome, 'pets', 'nijika--amia', 'spritesheet.webp'));
  assert.deepEqual(installed, image);
} finally {
  rmSync(testHome, { recursive: true, force: true });
