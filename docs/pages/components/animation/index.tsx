import React from 'react';
import { Animation, Button, ButtonToolbar } from 'cen-suite';
import DefaultPage from '@/components/Page';

import files from './files';

export default function Page() {
  return <DefaultPage dependencies={{ Button, ButtonToolbar, Animation }} sandboxFiles={files} />;
}
