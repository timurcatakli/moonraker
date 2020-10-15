import React from 'react';
import MainLayout from './src/components/MainLayout';

export function wrapPageElement({ element, props }) {
  return <MainLayout {...props}>{element}</MainLayout>;
}
