export default class Geolocation {
    getOptions() {
        return {
            timeOut: 20 * 1000,
            maximumAge: 60 * 60 * 24
        }
    }
    get(success, error) {
        return navigator.geolocation.getCurrentPosition(
            success, error, this.getOptions()
        )
    }
}