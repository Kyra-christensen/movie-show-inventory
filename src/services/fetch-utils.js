import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();

}

// signs an new user in and puts an auth token in local storage in the browser
export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}

// signs an existing user in and puts an auth token in local storage in the browser
export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

// removes the token from local storage and redirects the user home
export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function getAllMovSho() {
  const response = await client
    .from('mov_sho_inventory')
    .select();
  return checkError(response);
}

export async function createMovSho(movSho) {
  const response = await client
    .from('mov_sho_inventory')
    .insert([movSho]);
  return checkError(response);
}

export async function getSingleMovSho(id) {
  const response = await client
    .from('mov_sho_inventory')
    .select()
    .match({ id })
    .single();
  return checkError(response);
}