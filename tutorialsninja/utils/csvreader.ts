
import fs, { readFileSync } from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export interface LoginData {
    type: string;
    email: string;
    password: string;
}

export function csvfilereader(){
   const filepath = path.resolve(__dirname,'../resources/Logindata.csv')
   const filecontent = fs.readFileSync(filepath)

    return  parse(filecontent,{columns: true,skip_empty_lines: true,trim: true }) as LoginData[];
    

}

