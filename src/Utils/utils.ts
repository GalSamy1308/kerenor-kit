export const getHebrewDate = () : string => {
    const formatter = new Intl.DateTimeFormat('he-IL', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return formatter.format(new Date());
}
