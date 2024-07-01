'use server'

import { signIn } from "@/services/auth"

export async function googleSignIn(){
    await signIn('google')
}