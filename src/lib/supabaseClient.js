
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://pdftrtnktfayzjjeyiln.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkZnRydG5rdGZheXpqamV5aWxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0Mzg1NzEsImV4cCI6MjAzMDAxNDU3MX0.PSJyWMMgiqX_nZhjGCIgRVSUKJmlsDeVONaZ16QwBZI'

export const supabase = createClient(supabaseUrl, supabaseKey);
        