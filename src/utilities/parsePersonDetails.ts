import type { IPerson } from '@/types/person';
import { getGender } from './getGender';

export const parsePersonDetails = (person: IPerson) => {
  return [
    {
      detailName: 'Also knows as',
      detailValue: person?.also_known_as.join(', ') || 'N/A',
    },
    {
      detailName: 'Birthday',
      detailValue:
        (person?.birthday && new Date(person.birthday).toDateString()) ||
        'Unknown',
    },
    {
      detailName: 'Place of birth',
      detailValue: person?.place_of_birth || 'Unknown',
    },
    {
      detailName: 'Deathday',
      detailValue:
        (person?.deathday && new Date(person.deathday).toDateString()) ||
        'Unknown',
    },
    {
      detailName: 'Gender',
      detailValue: (person?.gender && getGender(person.gender)) || 'Unknown',
    },
    {
      detailName: 'Biography',
      detailValue: person?.biography || 'No biography available',
    },
  ];
};
