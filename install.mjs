#!/usr/bin/env node

// Offline installer for the local ChatGPT/Codex desktop pet folder.
// It does not contact a server or change any account's Work/Pets collection.

import { createHash } from 'node:crypto';
import { copyFile, lstat, mkdir, readFile, rm } from 'node:fs/promises';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const id = 'nijika--amia';
const expectedSheetSha256 = '85e14504b95e92ea77c362174bb1979a8a067f55a67b1915f33721eaa66451f9';
const kitDir = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
if (args[0] === 'install') args.shift();
if (args[0] === id) args.shift();

if (args.length !== 0 && (args.length !== 2 || args[0] !== '--codex-home' || !args[1])) {
  console.error(`用法：node install.mjs install ${id} [--codex-home 路径]`);
  process.exit(2);
}

const codexHome = args.length === 2
  ? resolve(args[1])
  : resolve(process.env.CODEX_HOME || join(homedir(), '.codex'));
const targetDir = join(codexHome, 'pets', id);
const sourceManifest = join(kitDir, 'pet.json');
const sourceSheet = join(kitDir, 'spritesheet.webp');

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

const [manifestBytes, sheetBytes] = await Promise.all([
  readFile(sourceManifest),
  readFile(sourceSheet),
]);
const manifest = JSON.parse(manifestBytes.toString('utf8'));
if (manifest.id !== id || manifest.spritesheetPath !== 'spritesheet.webp' || manifest.spriteVersionNumber !== 2) {
  throw new Error('pet.json 与此安装包不匹配。');
}
if (sha256(sheetBytes) !== expectedSheetSha256) {
  throw new Error('动画图集校验失败；请重新解压原始 ZIP。');
}

try {
  await lstat(targetDir);
  console.error(`目标已存在：${targetDir}\n安装器不会覆盖现有宠物。`);
  process.exit(2);
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}

await mkdir(dirname(targetDir), { recursive: true });
await mkdir(targetDir);
try {
  await copyFile(sourceManifest, join(targetDir, 'pet.json'));
  await copyFile(sourceSheet, join(targetDir, 'spritesheet.webp'));
  const installedSheet = await readFile(join(targetDir, 'spritesheet.webp'));
  if (sha256(installedSheet) !== expectedSheetSha256) {
    throw new Error('安装后的图集校验失败。');
  }
} catch (error) {
  await rm(targetDir, { recursive: true, force: true });
  throw error;
}

console.log(`已安装虹夏到：${targetDir}`);
console.log('请重新打开桌面应用，在「设置 → Pets」中刷新并选择「虹夏」。');
