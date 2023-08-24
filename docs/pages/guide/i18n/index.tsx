import React from 'react';
import { Calendar, SelectPicker, DatePicker, CustomProvider, Pagination } from 'cen-suite';
import DefaultPage from '@/components/Page';
import * as locales from 'rsuite/locales';

export default function Page() {
  return (
    <DefaultPage
      dependencies={{
        CustomProvider,
        Calendar,
        SelectPicker,
        DatePicker,
        Pagination,
        locales
      }}
    />
  );
}
