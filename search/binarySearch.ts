function binarySearch(data: number[], key: number): number {
    let low = 0
    let high = data.length - 1

    for (let i = 0; i < Math.log2(data.length); i++) {
        const mid = Math.floor((low + high) / 2)
        if (data[mid] == key) {
            return mid
        } else if (key < data[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return NaN
}