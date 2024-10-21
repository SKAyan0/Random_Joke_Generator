"use client"

import * as React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CardWithForm() {
 
let data2 = ``
const [joke, setJoke] = useState("Get a new Joke");
const [punch, setPunch] = useState("");



 async function  handleclick(){


     try{
    
      const fetcher = await fetch("https://official-joke-api.appspot.com/random_joke")
      let data = await fetcher.json()
      setJoke(data.setup)
      setPunch(data.punchline)
    }
    catch (error){
      setJoke("Failed to fetch joke. Please try again later")
      setPunch("")
      console.error("Failed to fetch joke. Please try again later")
      
    }

      
      


  }
  return (
    <main className="h-screen flex items-center justify-center">
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle className="text-2xl">Random Jokes</CardTitle>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
           
            <div className="flex flex-col space-y-1.5">
              <CardTitle  className="text-lg font-medium py-3">{joke}</CardTitle>
              <CardTitle  className="mb-12 text-lg font-medium py-3">{punch}</CardTitle>
            
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        
        <Button onClick={handleclick}>Generate Joke</Button>
      </CardFooter>
    </Card>
    </main>
  )
}
