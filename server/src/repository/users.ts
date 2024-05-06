import { supabase } from "../services/supabase";
import { createSubAccount } from "./transactions";

export const signUpUser = async (email: string, password: string) => {
    try {
        const { data: user, error } = await supabase.auth.signUp({
            email,
            password
        })

        if (user) {
            return user.user
        } else {
            console.log(error, 'cannot add user')
            return error
        }
    } catch (error) {
        return null
    }
}

export const addUserToDb = async (user: object) => {
    try {
        const { data } = await supabase
            .from('users')
            .insert([user])
            .select()
            .single()

        if (data) {
            createSubAccount({
                name: data.name,
                email: data.email,
                id: data.id
            });
        }
    } catch (error) {
        return error
    }

}

export const getExistingUser = async (email: string) => {
    try {
        const { data: existingUser, error } = await supabase
            .from('users')
            .select("*")
            .eq('email', email)
            .single()
        return existingUser
    } catch (error) {
        return null
    }
}

export const loginUser = async (email: string, password: string) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })
        return data.session
    } catch (error) {
        return null
    }
}

export const getUserByToken = async (token: string) => {
    try {
        const { data: { user } } = await supabase.auth.getUser(token)
        return user
    } catch (error) {
        return error
    }
}