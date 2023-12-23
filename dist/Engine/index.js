import { Scene } from "../Scene/index.js";
/**
 * @class Engine
 * @property {HTMLCanvasElement} canvas - main canvas for running engine
 * @property {CanvasRenderingContext2D} ctx - engine context
 * @property {number} canvasWidth - used for resize canvas width
 * @property {number} canvasHeight - used for resize canvas height
 * @property {Scene[]} scenes - contains scenes that created with this engine
 * @description - Rendering engine
 */
export class Engine {
    /**
     * @constructor
     * @param {HTMLCanvasElement} canvas - canvas for this rendering engine
     */
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.scenes = [];
    }
    /**
    * render - main render method for Engine
    * it will render scenes based on there willRender prop
    * @param {Function} callback - callback for every frame
    */
    render(callback) {
        if (this.scenes.length === 0)
            throw new Error("No scene available. try to create a scene");
        ;
        for (let i = 0; i < this.scenes.length; i++) {
            if (this.scenes[i].willRender) {
                this.scenes[i].render();
                break;
            }
            else {
                continue;
            }
        }
        callback();
    }
    /**
    * runDefaultRenderLoop based on requestAnimationFrame API;
    * @param {Function} callback - callback for every frame
    */
    runDefaultRenderLoop(callback) {
        if (requestAnimationFrame) {
            let engine = this;
            function animate(timestamp) {
                engine.render(callback);
                requestAnimationFrame(animate);
            }
            animate(0);
        }
        else
            throw new Error("requestAnimationFrame not support by this platform");
    }
    /**
     * Engine static method for creating scene
     * @param {Engine} engine - targeted engine
     * @return {Scene} - scene associated with Engine
     */
    static createScene(engine) {
        return new Scene(engine);
    }
}
//# sourceMappingURL=index.js.map