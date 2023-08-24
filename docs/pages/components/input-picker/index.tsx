import React from 'react';
import { InputPicker, Button } from 'cen-suite';
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';
import DefaultPage from '@/components/Page';

export default function Page() {
  return <DefaultPage dependencies={{ InputPicker, Button, SpinnerIcon }} />;
}
