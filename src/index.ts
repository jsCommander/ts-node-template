import {
  convertExcelFileToBase64TextFile,
  convertJsFileToJsonFile,
} from "./utils";

const excelPath = "./input/excel.xlsx";
const saveBase64Path = "./output/excel.txt";

const scriptPath = "./input/customScript.js";
const saveScriptPath = "./output/customScript.json";

convertExcelFileToBase64TextFile(excelPath, saveBase64Path)
  .then(() => {
    console.log("Successful convert excel file to base64");
  })
  .catch(error => {
    console.error("Error during converting excel file to base64");
    console.log(error.message);
  });

convertJsFileToJsonFile(scriptPath, saveScriptPath)
  .then(() => {
    console.log("Successful convert js file to string");
  })
  .catch(error => {
    console.error("Error during converting js file to string");
    console.log(error.message);
  });
