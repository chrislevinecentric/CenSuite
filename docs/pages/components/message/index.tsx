import React from 'react';
import { Message, Button, ButtonToolbar, SelectPicker, useToaster, Placeholder } from 'cen-suite';
import DefaultPage from '@/components/Page';

export default function Page() {
  return (
    <DefaultPage
      dependencies={{ Message, Button, ButtonToolbar, SelectPicker, useToaster, Placeholder }}
    />
  );
}
