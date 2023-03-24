export default class Star {

    constructor( { positionX = 0, positionY = 0, maxVelocity = 5, width = 10, height = 10, color = 'white' } ) {

        // use destructuring assignment to initialize the instance properties
        Object.assign(this, { positionX, positionY, maxVelocity, width, height, color });
    }
}