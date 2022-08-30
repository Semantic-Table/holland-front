import {Response} from "./response";

export interface Question {
  id : number;
  text : string;
  category : string;
  responses : Response[];
  serial : number;
}
