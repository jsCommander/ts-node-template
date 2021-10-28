import { promises as fs } from "fs";

export async function convertJsFileToJsonFile(
  pathTo: string,
  saveTo: string
): Promise<void> {
  const file = await fs.readFile(pathTo, { encoding: "utf-8" });
  const json = JSON.stringify({ customScript: file });
  await fs.writeFile(saveTo, json);
}

export async function convertExcelFileToBase64TextFile(
  pathTo: string,
  saveTo: string
): Promise<void> {
  const file = await fs.readFile(pathTo);
  const base64String = file.toString("base64");
  await fs.writeFile(saveTo, base64String);
}
