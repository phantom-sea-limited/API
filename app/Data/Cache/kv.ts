import { kv } from "@vercel/kv";
import { Cache, json } from "./default";


export class KvCache extends Cache {
    JSON: KVj;
    constructor() {
        super()
        this.JSON = new KVj()
    }

    async set(key: any, value: any): Promise<boolean> {
        await kv.set(key, value)
        return true
    }


    async get(key: any): Promise<JSON | null> {
        return await kv.get(key)
    }

}

class KVj extends json {
    async get(key: any, path: any): Promise<any> {
        return await kv.json.get(key, path)
    }
    async set(key: any, path: any, value: any): Promise<boolean> {
        await kv.json.set(key, path, value)
        return true
    }
}