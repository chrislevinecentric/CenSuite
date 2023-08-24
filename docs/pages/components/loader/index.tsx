import React from 'react';
import { Loader, Placeholder } from 'cen-suite';
import DefaultPage from '@/components/Page';

export default function Page() {
  return <DefaultPage dependencies={{ Loader, Placeholder }} />;
}
