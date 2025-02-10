export class HttpClient {
    constructor() {
        this._url = 'https://issuesdb-0c0c.restdb.io/rest/'
    }
    async get(endpoint) {
        try {
            const response = await fetch(this._url + endpoint, {
                headers: {
                    'x-apikey': '67a9efe5020c067844e653ba',
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                return await response.json()
            } else {
                throw new Error(`felkod : ${response.status} felmeddelande: ${response.statusText}`)
            }

        } catch (error) {
            throw new Error(error)

        }
    }
}