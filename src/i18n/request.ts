import deepmerge from 'deepmerge';
import { AbstractIntlMessages, hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

const sections = ['general', 'error', 'forms', 'cards', 'products'];

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const temp = { default: {}, fallback: {} };
  // dynamically import json file based on locale
  for (let i = 0; i < sections.length; i++) {
    try {
      temp.default = {
        ...temp.default,
        ...(await import(`../../messages/${locale}/${sections[i]}.json`))
          .default,
      };

      temp.fallback = {
        ...temp.fallback,
        ...(await import(`../../messages/en-US/${sections[i]}.json`)).default,
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      continue;
    }
  }

  const messages = deepmerge(temp.fallback, temp.default) as
    | AbstractIntlMessages
    | undefined;

  return {
    locale,
    messages,
  };
});
