class DataService {
    #baseUrl = 'https://api.openweathermap.org/data/2.5/';
    #appId = '73c6139f8538c63401630fe835c798e1'
    #unit = 'metric'

    async getWeatherForecast(citiId) {
        const url = `${this.#baseUrl}weather?id=${citiId}&appid=${this.#appId}&units=${this.#unit}&lang=ua`
        const response = await fetch(url)

        if (response.ok) {
            return await response.json()
        } else {
            console.warn(`[Error] Something wrong getting weather for city with id ${citiId}`)
            return null
        }
    }
}

export const dataService = new DataService()