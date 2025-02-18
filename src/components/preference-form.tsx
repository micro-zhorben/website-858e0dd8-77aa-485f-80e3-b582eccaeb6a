import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Coffee, Droplets, Flame, Utensils } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const formSchema = z.object({
  roastPreference: z.string().min(1, "Please select a roast level"),
  brewMethod: z.string().min(1, "Please select a brewing method"),
  flavorPreference: z.string().min(1, "Please select a flavor profile"),
  caffeinePreference: z.string().min(1, "Please select a caffeine level"),
});

interface PreferenceFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export function PreferenceForm({ onSubmit }: PreferenceFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roastPreference: "",
      brewMethod: "",
      flavorPreference: "",
      caffeinePreference: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader className="space-y-2 px-6 pb-4 pt-6">
            <Typography.H2 className="text-xl">Coffee Preferences</Typography.H2>
            <Typography.Muted>
              Tell us your preferences to get personalized recommendations
            </Typography.Muted>
          </CardHeader>
          <CardContent className="space-y-6 p-6 pt-2">
            <FormField
              control={form.control}
              name="roastPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-primary" />
                    Preferred Roast Level
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-foreground">
                        <SelectValue placeholder="Select roast level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="light">Light Roast</SelectItem>
                      <SelectItem value="medium">Medium Roast</SelectItem>
                      <SelectItem value="dark">Dark Roast</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brewMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Utensils className="h-4 w-4 text-primary" />
                    Brewing Method
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-foreground">
                        <SelectValue placeholder="Select brewing method" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="drip">Drip Coffee</SelectItem>
                      <SelectItem value="espresso">Espresso</SelectItem>
                      <SelectItem value="french">French Press</SelectItem>
                      <SelectItem value="pour">Pour Over</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="flavorPreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Coffee className="h-4 w-4 text-primary" />
                    Flavor Profile
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-foreground">
                        <SelectValue placeholder="Select flavor profile" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="fruity">Fruity & Bright</SelectItem>
                      <SelectItem value="nutty">Nutty & Chocolate</SelectItem>
                      <SelectItem value="caramel">Caramel & Sweet</SelectItem>
                      <SelectItem value="earthy">Earthy & Bold</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="caffeinePreference"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-primary" />
                    Caffeine Level
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-foreground">
                        <SelectValue placeholder="Select caffeine preference" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="decaf">Decaf</SelectItem>
                      <SelectItem value="low">Low Caffeine</SelectItem>
                      <SelectItem value="regular">Regular</SelectItem>
                      <SelectItem value="high">High Caffeine</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Get Your Perfect Coffee Match
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}