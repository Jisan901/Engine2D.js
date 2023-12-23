/**
 * @class Vector2
 * @property {number} x - x axis
 * @property {number} y - y axis
 */
export class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
    * add
    * @param {Vector2} vec - vector
    * @return {Vector2}
    */
    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }
    /**
    * subtract
    * @param {Vector2} vec - vector
    * @return {Vector2} - this
    */
    subtract(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }
    /**
    * multiplyBy
    * @param {Vector2} vec - vector
    * @return {Vector2} - this
    */
    multiplyBy(vec) {
        this.x *= vec.x;
        this.y *= vec.y;
        return this;
    }
    /**
    * divideBy
    * @param {Vector2} vec - vector
    * @return {Vector2} - this
    */
    divideBy(vec) {
        this.x /= vec.x;
        this.y /= vec.y;
        return this;
    }
    /**
    * scaleBy
    * @param {number} number - vector
    * @return {Vector2} - this
    */
    scaleBy(scaleAmount) {
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
    dot(vec) {
        return (vec.x * this.x) + (vec.y * this.y);
    }
    /**
    * cross
    * Vector cross product
    * @param {Vector2} vec - Vector
    * @return {number}
    */
    cross(vec) {
        return (this.x * vec.y) - (this.y * vec.x);
    }
    /**
    * length
    * get the magnitude of this Vector by Pythagorean theorem.
    * @return {number}
    */
    length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
    /**
    * angelBetween
    * returns angel Between this and given vector
    * @param {Vector2} vec - vector
    * @param {boolean} isRadian - depends it's for deg or Radian
    * @return {number}
    */
    angelBetween(vec, isRadian = true) {
        let angle = Math.acos(this.dot(vec) / (this.length() * vec.length()));
        if (isRadian) {
            return angle;
        }
        return angle * (180 / Math.PI);
    }
    /**
    * copyFrom
    * @param {Vector2} vec - Vector2
    */
    copyFrom(vec) {
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
    static lerp(vec1, vec2, t) {
        return new Vector2(vec1.x + ((vec2.x - vec1.x) * t), vec1.y + ((vec2.y - vec1.y) * t));
    }
    /**
    * normalize to unit vector
    * @param {Vector2} vec - vector
    * @return {Vector2} - returns new Vector
    * formula: <3i  6j  7k>/magnitude
    */
    static normalize(vec) {
        let magnitude = vec.length();
        let x = vec.x / magnitude;
        let y = vec.y / magnitude;
        return new Vector2(x, y);
    }
    /**
    * negate
    * negate all components x y z
    * @param {Vector2} vec - vector
    * @return {Vector2} - returns new vector;
    */
    static negate(vec) {
        return new Vector2(-vec.x, -vec.y);
    }
    /**
    * createCopy
    * create a new copy of given Vector
    * @param {Vector2} vec - vector
    * @return {Vector2} - returns new vector
    */
    static createCopy(vec) {
        return new Vector2(vec.x, vec.y);
    }
}
/**
 * @class Vector3
 * @property {number} x - x axis
 * @property {number} y - y axis
 * @property {number} z - z axis
 */
export class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
    * add on this
    * @param {Vector3} vec - vector
    * @return {Vector3}
    */
    add(vec) {
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
    subtract(vec) {
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
    multiplyBy(vec) {
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
    divideBy(vec) {
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
    scaleBy(scaleAmount) {
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
    dot(vec) {
        return (vec.x * this.x) + (vec.y * this.y) + (vec.z * this.z);
    }
    /**
    * cross
    * Vector cross product
    * @param {Vector3} vec - Vector
    * @return {Vector3}
    */
    cross(vec) {
        let x = (this.y * vec.z - this.z * vec.y);
        let y = -(this.x * vec.z - this.z * vec.x);
        let z = (this.x * vec.y - this.y * vec.x);
        return new Vector3(x, y, z);
    }
    /**
    * length
    * get the magnitude of this Vector by Pythagorean theorem.
    * @return {number}
    */
    length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
    }
    /**
    * angelBetween
    * returns angel Between this and given vector
    * @param {Vector3} vec - vector
    * @param {boolean} isRadian - depends it's for deg or Radian
    * @return {number}
    */
    angelBetween(vec, isRadian = true) {
        let angle = Math.acos(this.dot(vec) / (this.length() * vec.length()));
        if (isRadian) {
            return angle;
        }
        return angle * (180 / Math.PI);
    }
    /**
    * copyFrom
    * @param {Vector3} vec - Vector3
    */
    copyFrom(vec) {
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
    static lerp(vec1, vec2, t) {
        return new Vector3(vec1.x + ((vec2.x - vec1.x) * t), vec1.y + ((vec2.y - vec1.y) * t), vec1.z + ((vec2.z - vec1.z) * t));
    }
    /**
    * normalize to unit vector
    * @param {Vector3} vec - vector
    * @return {Vector3} - returns new Vector
    * formula: <3i  6j  7k>/magnitude
    */
    static normalize(vec) {
        let magnitude = vec.length();
        let x = vec.x / magnitude;
        let y = vec.y / magnitude;
        let z = vec.z / magnitude;
        return new Vector3(x, y, z);
    }
    /**
    * negate
    * negate all components x y z
    * @param {Vector3} vec - vector
    * @return {Vector3} - returns new vector;
    */
    static negate(vec) {
        return new Vector3(-vec.x, -vec.y, -vec.z);
    }
    /**
    * createCopy
    * create a new copy of given Vector
    * @param {Vector3} vec - vector
    * @return {Vector3} - returns new vector
    */
    static createCopy(vec) {
        return new Vector3(vec.x, vec.y, vec.z);
    }
}
//# sourceMappingURL=Vectors.js.map