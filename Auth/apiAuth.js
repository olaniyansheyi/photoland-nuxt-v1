import { useNuxtApp } from "#app";

export async function login({ email, password }) {
  const { $supabase } = useNuxtApp();
  let { data, error } = await $supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}
