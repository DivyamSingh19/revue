import React from 'react'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    
    <div className="flex gap-5 flex-col min-h-screen justify-center items-center">
      <h3>yaha page transistion aur loader effect daalenge</h3>
      <p>yaha voh layout and theme choose kareneka option denge</p>
      <div className='flex gap-5'>
        <Button>Select Layout</Button>
        <Button>Select Theme</Button>
      </div>
    </div>
  );
}

export default page
