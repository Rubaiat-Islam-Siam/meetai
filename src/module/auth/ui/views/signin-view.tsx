'use client';

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { OctagonAlertIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
    email: z.string().email({
        message: "Enter a valid email address",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
});

export const SigninView = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto py-10">
            <Card className="overflow-hidden p-0 shadow-2xl">
                <CardContent className="grid grid-cols-1 md:grid-cols-2 p-0">

                    {/* LEFT SIDE */}
                    <div className="p-8 flex flex-col justify-center">

                        <div className="mb-6">
                            <h1 className="text-3xl font-bold">Welcome Back</h1>
                            <p className="text-muted-foreground mt-2">
                                Sign in to continue to MeetAI
                            </p>
                        </div>

                        <Alert className="mb-6">
                            <OctagonAlertIcon className="h-4 w-4" />
                            <AlertTitle>
                                Demo credentials can be used here.
                            </AlertTitle>
                        </Alert>

                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-5"
                            >

                                {/* EMAIL */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your email"
                                                    type="email"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormDescription>
                                                Use your registered email address.
                                            </FormDescription>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* PASSWORD */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>

                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your password"
                                                    type="password"
                                                    {...field}
                                                />
                                            </FormControl>

                                            <FormDescription>
                                                Your password must be secure.
                                            </FormDescription>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full">
                                    Sign In
                                </Button>
                            </form>
                        </Form>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="bg-radial from-green-700 to-green-900 relative hidden md:flex flex-col gap-y-4 items-center justify-center">

                        <Image
                            src="/logo1.png"
                            alt="logo"
                            width={120}
                            height={120}
                        />

                        <div className="text-center space-y-2">
                            <p className="text-3xl font-bold text-white">
                                MeetAI
                            </p>

                            <p className="text-green-100 px-8">
                                Smart meetings, smarter collaboration.
                            </p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
};