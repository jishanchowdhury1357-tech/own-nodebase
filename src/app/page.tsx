import { Button } from '@/components/ui/button'
import prisma from '@/lib/db'

async function page() {
  const someting = true
  const users = await prisma.user.findMany()
  console.log(users)
  return (
     <div>
      <Button>{JSON.stringify(users)}</Button>
    </div>
  );
}

export default page