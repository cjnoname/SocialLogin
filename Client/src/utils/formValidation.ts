export const phoneNumber = (value: string) =>
    value && !/^\+?[\d\s-()x]+$/i.test(value)
        ? 'Invalid number'
        : undefined