"use server";

import { createClient } from "@/lib/supabase/server";

export async function checkWaitlistStatus(): Promise<boolean> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.email) return false;

  const { data } = await supabase
    .from("waitlist")
    .select("email")
    .eq("email", user.email.toLowerCase())
    .maybeSingle();

  return !!data;
}
