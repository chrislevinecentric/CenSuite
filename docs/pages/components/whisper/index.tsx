import React from 'react';
import { ButtonToolbar, Button, Whisper } from 'cen-suite';
import DefaultPage from '@/components/Page';

export default function Page() {
  return <DefaultPage dependencies={{ ButtonToolbar, Button, Whisper }} />;
}
