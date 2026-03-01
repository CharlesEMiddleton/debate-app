"use server";

import { createClient } from "@/lib/supabase/server";

export async function joinWaitlist(formData: FormData) {
  const fullName = (formData.get("full_name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const phone = (formData.get("phone") as string)?.trim();

  if (!fullName || fullName.length < 2) {
    return { error: "Please enter your full name." };
  }

  if (!email || !email.includes("@")) {
    return { error: "Please enter a valid email address." };
  }

  if (!phone || phone.length < 7) {
    return { error: "Please enter a valid phone number." };
  }

  try {
    const supabase = await createClient();

    const { error } = await supabase
      .from("waitlist")
      .insert({ full_name: fullName, email, phone });

    if (error) {
      if (error.code === "23505") {
        return { error: "You're already on the waitlist!" };
      }
      console.error("Waitlist insert error:", error);
      return { error: "Something went wrong. Please try again." };
    }

    return { success: true };
  } catch (err) {
    console.error("Waitlist action error:", err);
    return { error: "Something went wrong. Please try again." };
  }
}
