import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rrtazvgumfnsxglfxtbn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydGF6dmd1bWZuc3hnbGZ4dGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5MDAwNTAsImV4cCI6MjAzMTQ3NjA1MH0.lsg0m1Kq7jyHG7kHTDL_jlhw5ToZ84MQuqrlwC6ub68";

export default defineNuxtPlugin((nuxtApp) => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  nuxtApp.provide("supabase", supabase);
});
