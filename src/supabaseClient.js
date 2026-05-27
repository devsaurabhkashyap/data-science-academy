import { createClient } from '@supabase/supabase-js'

let supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'placeholder'

if (!supabaseUrl.startsWith('http')) {
  supabaseUrl = 'https://placeholder.supabase.co';
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
