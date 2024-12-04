import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ckoyseaglfmkgakjspus.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrb3lzZWFnbGZta2dha2pzcHVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4NzQyMzAsImV4cCI6MjAyMzQ1MDIzMH0.dkF4N7yRXVPVJBXBGOGwwJUGYvQgPZVVsZVPXxbqGQY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);