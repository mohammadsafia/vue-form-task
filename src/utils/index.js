export const inputTypes = [
    'text',
    'password',
    'email',
    'number',
    'url',
    'tel',
    'search',
    'color',
];

export const isCorrectType = types => type => types.includes(type);

export const randomIdGenerator = (suffix = 'item', length = 1e9) => `${suffix}-${Math.floor(Math.random() * length).toString(16)}`;
