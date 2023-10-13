import { revalidatePath } from 'next/cache'

export interface JWT {
    token_type?: string | null
    scope?: string | null
    expires_in?: number | null
    ext_expires_in?: number | null
    access_token?: string
    refresh_token?: string | null
    expires_on?: number
}

/**
 * 默认OA服务
 */
class defaultOA {
    JWT: JWT = {}
    constructor() {

    }
    /**
     * 在此方法内完成token的有效校验以及refresh_token
     * @returns JWT
     */
    async get_token(): Promise<JWT> {
        return {}
    }
    async refresh_token(): Promise<JWT> {
        return {}
    }
}

/**
 * 基于HTTP的OA直接获取
 */
class HTTPOA extends defaultOA {
    url: string
    header: HeadersInit
    constructor(url: string, header: HeadersInit) {
        super()
        this.url = url
        this.header = header
    }

    async get_token(): Promise<JWT> {
        var r = await fetch(this.url, { headers: { ...this.header }, next: { revalidate: 3600, tags: [this.url] } })
        this.JWT = await r.json()
        // @ts-ignore
        if (new Date() / 1000 < this.JWT.expires_on) {
            return this.JWT
        } else {
            return await this.refresh_token()
        }

    }

    async refresh_token(): Promise<JWT> {
        revalidatePath(this.url)
        return await this.get_token()
    }
}


export { HTTPOA, defaultOA }