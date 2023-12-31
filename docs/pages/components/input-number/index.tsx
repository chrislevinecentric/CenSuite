import React from 'react';
import { InputNumber, InputGroup } from 'cen-suite';
import DefaultPage from '@/components/Page';

import files from './files';

export default function Page() {
  return <DefaultPage dependencies={{ InputNumber, InputGroup }} sandboxFiles={files} />;
}
