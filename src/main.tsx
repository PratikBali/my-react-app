import { IntlProvider } from 'react-intl';
import App from './App';
import React from 'react';
import { createRoot } from "react-dom/client";
import "./styles/styles.scss";
import { messages } from "./locales/index";
console.log('* => messages:', messages);

type LocaleKeys = keyof typeof messages;
const locale: LocaleKeys = (navigator.language.split('-')[0] as LocaleKeys) || 'en';
console.log('* => locale:', locale);

// Flatten or transform messages to match the expected type
const flattenedMessages: Record<string, string> = Object.entries(messages[locale]).reduce(
  (acc, [key, value]) => {
    if (typeof value === "string") {
      acc[key] = value;
    } else if (typeof value === "object") {
      Object.entries(value).forEach(([nestedKey, nestedValue]) => {
        if (typeof nestedValue === "string") {
          acc[`${key}.${nestedKey}`] = nestedValue;
        }
      });
    }
    return acc;
  },
  {} as Record<string, string>
);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={flattenedMessages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
