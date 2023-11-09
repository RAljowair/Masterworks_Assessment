"use client";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AiOutlineLoading } from "react-icons/ai";
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 letters")
    .max(20, "Username must be at most 25 letters"),
  password: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "Password must contain uppercase character")
    .regex(new RegExp(".*[a-z].*"), "Password must contain lowercase character")
    .regex(new RegExp(".*\\d.*"), "Password must contain a number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    )
    .min(8, "Password must be at least 8 characters"),
});

export default function Home() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isReceived, setReceived] = React.useState<boolean>(false);
  
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      // variant:"Success",
      title: "Submited, " + values.username,
      description: "Enter correct informations",
    });
    redirect("/dashboard");
    
  }
  return (
    <main className="flex flex-col h-screen items-center justify-center p-10">
      <div className="w-[85%] md:py-8 md:w-[20%]">
        <h2 className="font-semibold text-3xl text-start">Login</h2>
      </div>
      <div className="w-[85%] md:w-[20%]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 backdrop-blur-sm p-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="h-[4em] md:h-[3em] md:text-lg"
                      placeholder="Enter your username"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {"● Make sure it's correct to contact you back."}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="h-[4em] md:h-[3em] md:text-lg"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="h-[3em] md:text-lg"
              type="submit"
              disabled={isLoading}>
              {isLoading ? (
                <>
                  <AiOutlineLoading className="mr-2 h-4 w-4 animate-spin" />{" "}
                  Sending
                </>
              ) : isReceived ? (
                "Sent :)"
              ) : (
                "Send Email"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
