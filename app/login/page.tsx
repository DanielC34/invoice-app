"use client"
import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Login = () => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center px-4">
        <Card className="max-w-sm w-95 p-4">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Log into your account with your email address
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-3">
                <Label>Email</Label>
                <Input placeholder="johndoe55@email.com" />
              </div>
              <Button>Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Login