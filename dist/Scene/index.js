/**
 * @class Scene
 * @property {boolean} willRender - engine will render this scene depending on this.
 * @property {Object2D[]} objects - objects to render
 * @property {Sprite[]} sprites - sprites buffer or image
 * @property {Entity[]} entities - entities for scene
 * @description - Scene for rendering 2d objects.
 */
export class Scene {
    constructor(engine) {
        this.id = crypto ? crypto.randomUUID() : Date.now().toString();
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
    render() {
        var _a, _b;
        if (this.entities.length === 0 && this.objects.length === 0) {
            return;
        }
        if (this.objects.length === this.entities.length) {
            for (let i = 0; i < this.objects.length; i++) {
                this.objects[i].render();
                this.entities[i].render();
            }
            return;
        }
        else {
            let length = Math.max(this.entities.length, this.objects.length);
            for (let i = 0; i < length; i++) {
                (_a = this.entities[i]) === null || _a === void 0 ? void 0 : _a.render();
                (_b = this.objects[i]) === null || _b === void 0 ? void 0 : _b.render();
            }
        }
    }
}
//# sourceMappingURL=index.js.map