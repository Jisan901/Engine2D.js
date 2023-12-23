import type {Engine} from "../Engine/index.js";
import type {Object2D} from "../Object2D/index.js";
import type {Sprite} from "../Sprite/index.js";
import type {Entity} from "../Entity/index.js";
/**
 * @class Scene
 * @property {boolean} willRender - engine will render this scene depending on this.
 * @property {Object2D[]} objects - objects to render
 * @property {Sprite[]} sprites - sprites buffer or image
 * @property {Entity[]} entities - entities for scene
 * @description - Scene for rendering 2d objects.
 */
export class Scene {
    readonly id : string;
    public engine : Engine;
    public willRender : boolean;
    public objects : Object2D[];
    public sprites : Sprite[];
    public entities : Entity[];
    readonly height : number;
    readonly width : number;
    constructor(engine : Engine) {
        this.id = crypto?crypto.randomUUID():Date.now().toString();
        this.engine = engine;
        this.willRender = true;
        this.objects = [];
        this.sprites = [];
        this.entities = [];
        this.width = this.engine.canvasWidth;
        this.height = this.engine.canvasHeight;
    }
    /**
    * render method for engine
    * it will render all this.objects and this.entities
    */
    public render() {
        if (this.entities.length === 0 && this.objects.length === 0) {
            return;
        }
        if (this.objects.length===this.entities.length){
            for (let i = 0; i < this.objects.length; i++) {
                this.objects[i].render();
                this.entities[i].render();
            }
            return;
        }
        else{
            let length : number = Math.max(this.entities.length, this.objects.length);
            for (let i = 0; i < length; i++) {
                this.entities[i]?.render();
                this.objects[i]?.render();
            }
        }
    }
}