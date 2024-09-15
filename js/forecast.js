export class Forecast {
    constructor({ name, main, weather }) {
        this.name = name;
        this.temp = main.temp;
        this.description = weather[0].description;
        this.icon = weather[0].icon
        this.alt = weather[0].main
    }

    createElement() {
        const tr = document.createElement('tr')

        tr.insertAdjacentHTML('beforeend',
            `   <td class="cities">${this.name}</td>
                <td>
                    <samp class="temp">${this.temp}&deg;<br></samp>
                    <samp class="description">${this.description}</samp>
                </td>
                <td>
                    <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="${this.alt}">
                </td>
            `
        )

        return tr
    }
}