import React,{useState} from "react";

import { Button } from "@/components/ui/button";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Login = () => {


    const [isPasswordShow, SetIsPasswordShow]= useState(false)

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-4">
      <Card className="w-full max-w-sm bg-zinc-900 text-white shadow-lg border border-zinc-700">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold text-orange-500">
            JobDekho.com
        </CardTitle>
        <CardDescription className="text-zinc-400 text-sm">
            Just one key away from your dream job
        </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">User Name</Label>
                <Input
                  id="name"
                  placeholder="e.g. tonystark123"
                  className="bg-zinc-800 text-white border-zinc-700"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
      <Label htmlFor="password">Password</Label>
      <div className="relative">
        <Input
          id="password"
          type={isPasswordShow ? "text" : "password"}
          placeholder="Enter Your Password"
          className="bg-zinc-800 text-white border-zinc-700 pr-10"
        />
        <Button
          type="button"
          size="icon"
          variant="link"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 cursor-pointer"
          onClick={() => SetIsPasswordShow(prev => !prev)}
        >
          {isPasswordShow ? <IoEyeOutline /> : <IoEyeOffOutline />}
        </Button>
      </div>
    </div>

              {/* <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger className="bg-zinc-800 text-white border-zinc-700">
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between">
          {/* <Button variant="outline">Cancel</Button> */}
          <Button variant="outline"  className="text-black w-40">Login</Button>
          <Button variant="outline"  className="text-black w-40">Register</Button>
        </CardFooter>
        <Button className="text-white" variant="link">Forgot Password?</Button>
      </Card>
    </div>
  );
};

export default Login;


