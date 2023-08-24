import React from 'react';
import {
  Notification,
  Button,
  ButtonToolbar,
  SelectPicker,
  useToaster,
  Uploader,
  Placeholder
} from 'cen-suite';
import DefaultPage from '@/components/Page';

export default function Page() {
  return (
    <DefaultPage
      dependencies={{
        Notification,
        Button,
        ButtonToolbar,
        SelectPicker,
        useToaster,
        Uploader,
        Placeholder
      }}
    />
  );
}
