export const getLanguageFullName = (shortName: string): string => {
    switch (shortName) {
        case 'en':
            return 'English';
        case 'es':
            return 'Spanish';
        case 'fr':
            return 'French';
        case 'de':
            return 'German';
        case 'it':
            return 'Italian';
        case 'ja':
            return 'Japanese';
        case 'pt':
            return 'Portuguese';
        case 'ru':
            return 'Russian';
        case 'zh':
            return 'Chinese';
        default:
            return 'Unknown';
    }
};
