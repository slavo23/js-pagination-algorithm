class Paginator {
    constructor(inputArray, threshold) {
        this.inputArray = inputArray
        this.threshold = threshold
        this.remainder = this.inputArray.length % this.threshold

        this.current = 0
        this.pages = Math.ceil(this.inputArray.length / this.threshold)

        this.start = 0
        this.end = this.threshold
    }

    selected(start, end) {
        return this.inputArray.slice(start, end)
    }

    next() {
        if (this.current < this.pages) {
            this.current += 1; return this.moveTo(this.current)
        }
    }
    previous() {
        if (this.current > 1) {
            this.current -= 1; return this.moveTo(this.current)
        }
    }

    moveTo(page) {
        let pos = page * this.threshold
        if (!this.remainder || pos - this.remainder !== this.inputArray.length) {
            this.start = pos - this.threshold
            this.end = pos
            return this.selected(pos - this.threshold, pos)
        } else {
            this.start = pos - this.threshold
            this.end = pos + this.remainder
            return this.selected(pos - this.threshold, pos + this.remainder)
        }
    }
}
