import { kv } from "@vercel/kv";

export async function GET() {
    const at = {
        "token_type": "Bearer",
        "scope": "Files.Read User.Read profile openid email",
        "expires_in": 5332,
        "ext_expires_in": 5332,
        "access_token": "ey...",
        "refresh_token": "0...",
        "expires_on": 1695718734
    }
    const r = await kv.json.get("GRAPH", "$..access_token","$..expires_on")
    r["$..access_token"]
    return new Response(JSON.stringify(r))
}