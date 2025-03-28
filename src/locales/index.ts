import common_descriptor from "./en/common_descriptor.json";

export const enMessages = {
    EMPTY: '',
    common_descriptor: { ...common_descriptor },
};


export const messages = {
    en: enMessages,
} as const;

export type IntlMessages = typeof messages;
export type Locales = keyof typeof messages;