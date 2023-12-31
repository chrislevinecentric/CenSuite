import React from 'react';
import { Breadcrumb } from 'cen-suite';
import Link from 'next/link';
import DefaultPage from '@/components/Page';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';

export default function Page() {
  return <DefaultPage dependencies={{ Breadcrumb, Link, AngleRightIcon }} />;
}
