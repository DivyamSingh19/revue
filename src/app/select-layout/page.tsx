import React from 'react'
import LayoutSelector from '@/components/layout/layoutselector'
import { LayoutProvider } from '@/lib/layoutcontext';

const SelectLayout = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <LayoutProvider>
        <LayoutSelector/>
      </LayoutProvider>
    </div>
  );
}

export default SelectLayout