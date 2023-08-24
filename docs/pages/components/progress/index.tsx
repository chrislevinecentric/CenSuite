import React from 'react';
import { Progress, Button, ButtonGroup, Row, Col } from 'cen-suite';
import DefaultPage from '@/components/Page';

export default function Page() {
  return <DefaultPage dependencies={{ Progress, Button, ButtonGroup, Row, Col }} />;
}
