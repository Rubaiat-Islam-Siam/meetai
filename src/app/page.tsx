"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"; 


export default function Home() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const onSubmit = () => {
    authClient.signUp.email({name,email,password},{
        onRequest: (ctx:any) => {
            //show loading
        },
        onSuccess: (ctx:any) => {
            //redirect to the dashboard or sign in page
        },
        onError: (ctx:any) => {
            // display the error message
            alert(ctx.error.message);
        },
    })
    
  }
  return (
    <div className="flex flex-col gap-2">
      <h1>Login</h1>
      <Input className="border" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input className="border" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input className="border" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onSubmit}>Login</Button>
    </div>
    
  )
}