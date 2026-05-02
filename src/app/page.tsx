import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="space-x-2">
        <Button variant="destructive">Login</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  )
}