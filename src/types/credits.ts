import {ICast} from "./cast";
import {ICrew} from "./crew";

export interface ICredits {
    id: number;
    cast: ICast[];
    crew: ICrew[];
}
