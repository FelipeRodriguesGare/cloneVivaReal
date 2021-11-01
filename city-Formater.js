export const cityFormater = (value) => {
    let cityName = value
    cityName = cityName.toLowerCase();
    cityName = cityName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    cityName = cityName.replaceAll(" ", "-")
    return cityName
}