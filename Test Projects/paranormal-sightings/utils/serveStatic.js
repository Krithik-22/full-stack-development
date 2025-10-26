import path from "node:path";
import fs from "node:fs/promises";
import { getContentType } from "./sendContentType.js";
import { sendResponse } from "./sendResponse.js";

export const serveStatic = async (req, res, __dirname) => {
  try {
    const publicDir = path.join(__dirname, "public");

    const fileSource = path.join(
      publicDir,
      req.url === "/" ? "index.html" : req.url
    );

    const payload = await fs.readFile(fileSource);

    const ext = path.extname(fileSource);
    const contentType = getContentType(ext);

    console.log();

    sendResponse(res, 200, contentType, payload);
  } catch(err){
    console.log(err)
  }
};
