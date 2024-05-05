import { supabase } from "../services/supabase";

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
        await supabase
            .from('users')
            .insert([user])
            .select()
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
