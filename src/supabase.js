import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pwuhngcxepwfvynqirsc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3dWhuZ2N4ZXB3ZnZ5bnFpcnNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyMjg5NDgsImV4cCI6MTk4NzgwNDk0OH0.2EOl5Z6qsrmNXJT9w5Bc5k5sMXLBcxrYzNHpBdR2xlk'
const database = createClient(supabaseUrl, supabaseKey)

export {database}