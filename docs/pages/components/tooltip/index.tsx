import React from 'react';
import { Whisper, Tooltip, ButtonToolbar, Button } from 'cen-suite';
import DefaultPage from '@/components/Page';

export default function Page() {
  return <DefaultPage dependencies={{ Whisper, Tooltip, ButtonToolbar, Button }} />;
}
