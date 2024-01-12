import { writeFile } from "fs";
import { add } from "./api";

interface IData {
  last_update_utc: string;
  headers: Array<{
    name: string;
    value: string
  }>;
}

async function parse() {
  const response = await add();
  const data: IData = response.data;
  
  // ! IMPORTANT !
  // ! If you change the content of this string, be careful not to break indentation
  // ! as this is going to become a yaml file.
  let yaml = '/*\n';
  for(const header of data.headers) {
    yaml += `   ${header.name}: ${header.value}\n`;
  }
  
  writeFile('_headers', yaml, (err) => console.log(err));
}

parse();
