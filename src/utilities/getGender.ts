export const getGender = (genderId: number): string => {
  switch (genderId) {
    case 1:
      return 'Female';
    case 2:
      return 'Male';
    default:
      return 'Unknown';
  }
};
