export class Cache {
    JSON: json
    constructor() {
        this.JSON = new json()
    }

    async set(key: any, value: any) {
        return true
    }

    async get(key: any): Promise<any> {
    }
}

export class json {
    async set(key: any, path: any, value: any) {
        return true
    }

    async get(key: any, path: any): Promise<any> {
    }
}