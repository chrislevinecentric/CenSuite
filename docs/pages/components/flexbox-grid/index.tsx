import React from 'react';
import { FlexboxGrid, Button, Divider, Col } from 'cen-suite';
import DefaultPage from '@/components/Page';

import files from './files';

export default function Page() {
  return <DefaultPage dependencies={{ FlexboxGrid, Button, Divider, Col }} sandboxFiles={files} />;
}
