class Request {

    async makeRequest(url) {
        try{
            const response = await fetch(url)
            return await response.json();
        } catch {
            throw new Error ("Server request failed!")
        }
    }

    async getHouseObject(state, city) {
        const url = `https://private-9e061d-piweb.apiary-mock.com/venda?state=${state}&city=${city}`
        try {
            const response = await this.makeRequest(url);
            const final = response.search.result.listings.reduce((acc, value) => {
                let obj = []
                obj.state = value.listing.address.state
                obj.stateAcronym = value.listing.address.stateAcronym
                obj.address = `${value.link.data.street}, ${value.link.data.streetNumber}, ${value.listing.address.state} - ${value.listing.address.stateAcronym}`
                obj.mediaUrl = value.medias[0].url
                obj.houseName = value.link.name
                obj.price = value.listing.pricingInfos[0].price
                obj.condoFee = value.listing.pricingInfos[0].monthlyCondoFee
                obj.houseSize = value.listing.usableAreas[0]
                obj.bathroom = value.listing.bathrooms[0]
                obj.bedrooms = value.listing.bedrooms[0]
                obj.parking = value.listing.parkingSpaces[0]
                obj.type = value.listing.unitTypes[0]
                obj.amenities = value.listing.amenities
                return [...acc, obj]
            },[])
            final.totalCount = response.search.totalCount
            console.log(final)
            console.log(response)
            return final
        } catch (err) {
            console.log(err)
        }
    }
}

export default Request