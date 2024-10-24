const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config();

const targetPath = "src/environments/enviroments.ts";

let environmentConfig = fs.readFileSync(targetPath, "utf8");

const dynamicConfig = `
  ARTIFACTORY_READER_USER: "${process.env.ARTIFACTORY_READER_USER || ""}",
  ARTIFACTORY_READER_API_KEY: "${process.env.ARTIFACTORY_READER_API_KEY || ""}"
`;

if (!environmentConfig.includes("ARTIFACTORY_READER_USER")) {
  const insertAt = environmentConfig.lastIndexOf("};");
  environmentConfig =
    environmentConfig.slice(0, insertAt) +
    `  ${dynamicConfig},\n` +
    environmentConfig.slice(insertAt);

  // Escribir el archivo con las nuevas variables agregadas
  fs.writeFile(targetPath, environmentConfig, (err) => {
    if (err) {
      console.error("Error al escribir en environment.ts:", err);
    } else {
      console.log(
        "Archivo environment.ts actualizado con variables de entorno."
      );
    }
  });
  return;
}
console.log("Las variables ya están definidas en environment.ts.");
