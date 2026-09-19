import { Button } from '@/components/ui/button'
import { cn } from 'cn'
import React from 'react'

function page() {
  const someting = true
  return (
    <div
      className={cn(
        "text-2xl",
        someting == true && "text-9xl text-red-700 border-amber-200",
      )}
    >
      page
      <Button>Hello</Button>
    </div>
  );
}

export default page