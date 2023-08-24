import React from 'react';
import { Affix, Button, ButtonToolbar, Placeholder } from 'cen-suite';
import DefaultPage from '@/components/Page';

export default function Page() {
  return <DefaultPage dependencies={{ ButtonToolbar, Button, Affix, Placeholder }} />;
}
