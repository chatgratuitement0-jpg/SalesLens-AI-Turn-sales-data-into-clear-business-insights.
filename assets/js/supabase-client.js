// SalesLens Supabase browser client. Fill these values from Supabase Project Settings > API.
// Never put a service-role or secret key in this file.
window.SalesLensConfig={SUPABASE_URL:'',SUPABASE_PUBLISHABLE_KEY:''};
window.salesLensSupabase=null;
if(window.SalesLensConfig.SUPABASE_URL&&window.SalesLensConfig.SUPABASE_PUBLISHABLE_KEY&&window.supabase){window.salesLensSupabase=window.supabase.createClient(window.SalesLensConfig.SUPABASE_URL,window.SalesLensConfig.SUPABASE_PUBLISHABLE_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}})}
