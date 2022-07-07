import {IPerson} from "../types/person";
import {getGender} from "./getGender";

export const parsePersonDetails = (person: IPerson | null) => {
    return [
        {
            detailName: 'Also knows as',
            detailValue: person?.also_known_as.join(', '),
        },
        {
            detailName: 'Birthday',
            detailValue: person?.birthday && new Date(person.birthday).toDateString(),
        },
        {
            detailName: 'Place of birth',
            detailValue: person?.place_of_birth,
        },
        {
            detailName: 'Deathday',
            detailValue: person?.deathday && new Date(person.deathday).toDateString(),
        },
        {
            detailName: 'Gender',
            detailValue: person?.gender && getGender(person.gender),
        },
        {
            detailName: 'Biography',
            detailValue: person?.biography,
        },
    ];
};
