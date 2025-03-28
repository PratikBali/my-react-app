import { useIntl } from "react-intl";
import { useCallback } from "react";
import { enMessages } from "./index";

type AppIntlMessageKeys = keyof typeof enMessages;

export const useAppIntl = () => {
    const { formatMessage, ...rest } = useIntl();

    const typedFormatMessage = useCallback(
        (id: AppIntlMessageKeys, values?: Record<string, string | number>) => {
            return formatMessage({ id }, values);
        },
        [formatMessage]
    );

    return {
        ...rest,
        formatMessage: typedFormatMessage,
    };
};

export type AppIntlShape = ReturnType<typeof useAppIntl>;