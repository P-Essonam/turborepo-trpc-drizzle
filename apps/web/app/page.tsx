import { Button } from "@workspace/ui/components/button"
import { trpc } from '@/trpc/server';

export default async function Page() {

   const greeting = await trpc.hello();

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>

        {greeting.map((user) => (
           <div key={user.id} className="p-4 border rounded">
            <p className="text-lg font-semibold">{user.firstName} {user.lastName}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))}     

      </div>
    </div>
  )
}
