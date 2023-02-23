import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { TRANSLATIONS_NAMESPACES } from '#constants/translations';

export async function getStaticPropsTranslations({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, Object.values(TRANSLATIONS_NAMESPACES)))
    }
  };
}
