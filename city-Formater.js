const specialCases = (uf) => {
    const cases = {
        sp: 'sao-paulo',
        rj: 'rio-de-janeiro'
    }
    return cases[uf]
}

export const cityFormater = (value) => {
    let cityName = value
    cityName = cityName.toLowerCase();
    if (specialCases(cityName)) cityName = specialCases(cityName) 
    cityName = cityName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    cityName = cityName.replaceAll(" ", "-")
    return cityName
}