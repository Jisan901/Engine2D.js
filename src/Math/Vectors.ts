/**
 * @class Vector2
 * @property {number} x - x axis
 * @property {number} y - y axis
 */
export class Vector2 {
    public x : number;
    public y : number;
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
    /**
    * add
    * @param {Vector2} vec - vector
    * @return {Vector2}
    */
    public add(vec : Vector2):Vector2 {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }
    /**
    * subtract
    * @param {Vector2} vec - vector
    * @return {Vector2} - this
    */
    public subtract(vec : Vector2):Vector2 {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }
    /**
    * multiplyBy
    * @param {Vector2} vec - vector
    * @return {Vector2} - this
    */
    public multiplyBy(vec : Vector2) : Vector2 {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    }
    /**
    * divideBy
    * @param {Vector2} vec - vector
    * @return {Vector2} - this
    */
    public divideBy(vec : Vector2) : Vector2 {
        this.x /= vec.x;
        this.y /= vec.y;
        return this;
    }
    /**
    * scaleBy
    * @param {number} number - vector
    * @return {Vector2} - this
    */
    public scaleBy(scaleAmount : number) : Vector2 {
        this.x *= scaleAmount;
        this.y *= scaleAmount;
        return this;
    }
    /**
    * dot
    * Vector dot product
    * @param {Vector2} vec - vector
    * @return {number}
    */
    public dot(vec : Vector2):number {
        return (vec.x*this.x)+(vec.y*this.y);
    }
    /**
    * cross
    * Vector cross product
    * @param {Vector2} vec - Vector
    * @return {number}
    */
    public cross(vec : Vector2): number {
        return (this.x*vec.y)-(this.y*vec.x);
    }
    /**
    * length 
    * get the magnitude of this Vector by Pythagorean theorem.
    * @return {number}
    */
    public length() : number {
        return Math.sqrt((this.x*this.x) + (this.y*this.y));
    }
    /**
    * angelBetween
    * returns angel Between this and given vector
    * @param {Vector2} vec - vector
    * @param {boolean} isRadian - depends it's for deg or Radian
    * @return {number}
    */
    public angelBetween(vec : Vector2, isRadian : boolean = true) : number {
        let angle : number = Math.acos(this.dot(vec) / (this.length() * vec.length()));
        if (isRadian) {
            return angle;
        }
        return angle*(180/Math.PI);
    }
    /**
    * copyFrom
    * @param {Vector2} vec - Vector2
    */
    public copyFrom(vec : Vector2) {
        this.x = vec.x;
        this.y = vec.y;
    }
    /**
    * lerp - linear interpolation
    * @param {Vector2} vec1 - start Vector
    * @param {Vector2} vec2 - target Vector
    * @param {number} t - amount
    * @return {Vector2} - new Vector
    * formula: A + ((B–A) * t)
    */
    static lerp(vec1 : Vector2, vec2 : Vector2, t : number):Vector2 {
        return new Vector2(vec1.x + ((vec2.x-vec1.x) * t), vec1.y + ((vec2.y-vec1.y) * t));
    }
    /**
    * normalize to unit vector
    * @param {Vector2} vec - vector
    * @return {Vector2} - returns new Vector
    * formula: <3i  6j  7k>/magnitude
    */
    static normalize(vec : Vector2) : Vector2 {
        let magnitude : number = vec.length();
        let x : number = vec.x / magnitude;
        let y : number = vec.y / magnitude;
        return new Vector2(x, y);
    }
    /**
    * negate
    * negate all components x y z
    * @param {Vector2} vec - vector
    * @return {Vector2} - returns new vector;
    */
    static negate(vec : Vector2) : Vector2 {
        return new Vector2(-vec.x,-vec.y);
    }
    /**
    * createCopy
    * create a new copy of given Vector
    * @param {Vector2} vec - vector
    * @return {Vector2} - returns new vector
    */
    static createCopy(vec : Vector2) : Vector2 {
        return new Vector2(vec.x,vec.y);
    }
}


/**
 * @class Vector3
 * @property {number} x - x axis
 * @property {number} y - y axis
 * @property {number} z - z axis
 */
export class Vector3 {
    public x : number;
    public y : number;
    public z : number;
    constructor(x:number, y:number, z:number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
    * add on this
    * @param {Vector3} vec - vector
    * @return {Vector3}
    */
    public add(vec : Vector3):Vector3 {
        this.x += vec.x;
        this.y += vec.y;
        this.z += vec.z;
        return this;
    }
    /**
    * subtract on this
    * @param {Vector3} vec - vector
    * @return {Vector3} - this
    */
    public subtract(vec : Vector3):Vector3 {
        this.x -= vec.x;
        this.y -= vec.y;
        this.z -= vec.z;
        return this;
    }
    /**
    * multiplyBy
    * @param {Vector3} vec - vector
    * @return {Vector3} - this
    */
    public multiplyBy(vec : Vector3) : Vector3 {
        this.x *= vec.x;
        this.y *= vec.y;
        this.z *= vec.z;
        return this;
    }
    /**
    * divideBy
    * @param {Vector3} vec - vector
    * @return {Vector3} - this
    */
    public divideBy(vec : Vector3) : Vector3 {
        this.x /= vec.x;
        this.y /= vec.y;
        this.z /= vec.z;
        return this;
    }
    /**
    * scaleBy
    * @param {number} number - vector
    * @return {Vector3} - this
    */
    public scaleBy(scaleAmount : number) : Vector3 {
        this.x *= scaleAmount;
        this.y *= scaleAmount;
        this.z *= scaleAmount;
        return this;
    }
    /**
    * dot
    * Vector dot product
    * @param {Vector3} vec - vector
    * @return {number}
    */
    public dot(vec : Vector3):number {
        return (vec.x*this.x)+(vec.y*this.y)+(vec.z*this.z);
    }
    /**
    * cross
    * Vector cross product
    * @param {Vector3} vec - Vector
    * @return {Vector3}
    */
    public cross(vec : Vector3): Vector3 {
        let x : number = (this.y*vec.z - this.z*vec.y);
        let y : number = -(this.x*vec.z - this.z*vec.x);
        let z : number = (this.x*vec.y - this.y*vec.x);
        return new Vector3(x,y,z);
    }
    /**
    * length 
    * get the magnitude of this Vector by Pythagorean theorem.
    * @return {number}
    */
    public length() : number {
        return Math.sqrt((this.x*this.x) + (this.y*this.y) + (this.z*this.z));
    }
    /**
    * angelBetween
    * returns angel Between this and given vector
    * @param {Vector3} vec - vector
    * @param {boolean} isRadian - depends it's for deg or Radian
    * @return {number}
    */
    public angelBetween(vec : Vector3, isRadian : boolean = true) : number {
        let angle : number = Math.acos(this.dot(vec) / (this.length() * vec.length()));
        if (isRadian) {
            return angle;
        }
        return angle*(180/Math.PI);
    }
    /**
    * copyFrom
    * @param {Vector3} vec - Vector3
    */
    public copyFrom(vec : Vector3) {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
    }
    /**
    * lerp - linear interpolation
    * @param {Vector3} vec1 - start Vector
    * @param {Vector3} vec2 - target Vector
    * @param {number} t - amount
    * @return {Vector3} - new Vector
    * formula: A + ((B–A) * t)
    */
    static lerp(vec1 : Vector3, vec2 : Vector3, t : number):Vector3 {
        return new Vector3(
            vec1.x + ((vec2.x-vec1.x) * t),
            vec1.y + ((vec2.y-vec1.y) * t),
            vec1.z + ((vec2.z-vec1.z) * t)
            );
    }
    /**
    * normalize to unit vector
    * @param {Vector3} vec - vector
    * @return {Vector3} - returns new Vector
    * formula: <3i  6j  7k>/magnitude
    */
    static normalize(vec : Vector3) : Vector3 {
        let magnitude : number = vec.length();
        let x : number = vec.x / magnitude;
        let y : number = vec.y / magnitude;
        let z : number = vec.z / magnitude;
        return new Vector3(x, y, z);
    }
    /**
    * negate
    * negate all components x y z
    * @param {Vector3} vec - vector
    * @return {Vector3} - returns new vector;
    */
    static negate(vec : Vector3) : Vector3 {
        return new Vector3(-vec.x,-vec.y,-vec.z);
    }
    /**
    * createCopy
    * create a new copy of given Vector
    * @param {Vector3} vec - vector
    * @return {Vector3} - returns new vector
    */
    static createCopy(vec : Vector3) : Vector3 {
        return new Vector3(vec.x,vec.y,vec.z);
    }
}