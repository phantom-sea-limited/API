import { Cache } from '../Cache'
import { defaultOA, JWT } from './OA'
import { revalidatePath } from 'next/cache'

class GraphOA extends defaultOA {
    client_id
    client_secret
    scope
    Data
    constructor(Data: Cache, client_id: `${string}-${string}-${string}-${string}-${string}`, client_secret: string, scope: string = "Files.Read offline_access") {
        super()
        this.Data = Data
        this.client_id = client_id
        this.client_secret = client_secret
        this.scope = scope
    }

    async get_token(): Promise<JWT> {
        const RT = await this.Data.JSON.get("GRAPH", "access_token")
    }

    async refresh_token(): Promise<JWT> {
        revalidatePath("Graph")
        const RT = await this.Data.JSON.get("GRAPH", "refresh_token")
        const data = {
            "refresh_token": "",
            "client_id": this.client_id,
            "client_secret": this.client_secret,
            "grant_type": "refresh_token",
            "scope": this.scope
        }
        const r = await fetch("https://login.microsoftonline.com/common/oauth2/v2.0/token", {
            method: "POST",
            body: JSON.stringify(data), next: { revalidate: 3600, tags: ["Graph"] }
        })
        this.JWT = await r.json()
        return this.JWT
    }
}
