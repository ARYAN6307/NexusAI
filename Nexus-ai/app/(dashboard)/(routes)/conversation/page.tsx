"use client";

import {Heading} from "@/components/heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OpenAI from "openai";
import { Empty } from "@/components/ui/empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import ReactMarkdown from "react-markdown";
import { Vortex } from "@/components/ui/vortex";
import * as z from "zod";

import { formSchema } from "./constants";

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<
    OpenAI.Chat.CreateChatCompletionRequestMessage[]
  >([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      //ToDo: Open Pro model
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className=" bg-black ">
      <Vortex
         backgroundColor="black"
         className="flex  flex-col justify-center mt-0 px-2 md:px-10  w-full h-full"
      >
      <Heading
        title="Conversation"
        description="Our most innovative conversational model to date."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-600/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="What is the process of photosynthesis and how does it contribute to the survival of plants?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full bg-violet-500 hover:bg-violet-700"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started" />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black border-opacity-10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <div
                  className="text-sm overflow-hidden leading-7"
                  dangerouslySetInnerHTML={{
                    __html: message.content
                      ? message.content.replace(/\n/g, "<br />")
                      : "",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </Vortex>
    </div>
  );
};

export default ConversationPage;
