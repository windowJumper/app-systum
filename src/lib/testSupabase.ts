import { supabase } from "./supabase";

export async function testSupabaseConnection() {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .limit(1);

  if (error) {
    console.error("Supabase connection error:", error.message);
    return false;
  }

  console.log("Supabase connected successfully:", data);
  return true;
}