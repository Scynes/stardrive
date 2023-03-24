export default class Star {

    constructor( { positionX = 0, positionY = 0, velocity = 5, width = 10, height = 10, color = 'white', trail = false } ) {

        Object.assign(this, { positionX, positionY, velocity, width, height, color, trail } );
    }

    /**
     * Get's the initial depth when being drawn to the canvas. This
     * is useful rendering perspective.
     */
    #getCanvasDepth = () => {

        return (this.width > this.height ? this.height : this.width) * 2;
    }
}