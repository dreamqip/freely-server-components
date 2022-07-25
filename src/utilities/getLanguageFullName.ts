export const getLanguageFullName = (shortName: string): string => {
    switch (shortName) {
        case 'en':
            return 'English';
        default:
            return 'Unknown';
    }
};
