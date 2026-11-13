
const SUPABASE_URL = "https://xgnnggmvylumtxqijeju.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_YKthvlky1X1FoFONMIAsng_szXTwT6w";

window.artClubSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
