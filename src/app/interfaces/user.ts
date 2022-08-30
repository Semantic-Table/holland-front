import {Riasec} from "../classes/riasec";

export interface User {
  mail : string;
  name : string;
  firstname : string;
  riasec : Riasec;
  password : string;
  roles : string[];
}
