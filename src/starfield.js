export default class Starfield {

    constructor ( { totalStars = 300, minimumVelocity = 4, maximumVelocity = 12, trails = true } ) {

        Object.assign(this, { totalStars, minimumVelocity, maximumVelocity, trails } )
    }
}