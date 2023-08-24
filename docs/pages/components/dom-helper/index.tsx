import React from 'react';
import { ButtonToolbar, Button, DOMHelper } from 'cen-suite';
import DefaultPage from '@/components/Page';

export default function Page() {
  return <DefaultPage dependencies={{ ButtonToolbar, Button, DOMHelper }} />;
}
