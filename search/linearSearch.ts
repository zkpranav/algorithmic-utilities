function linearSearch(data: number[], key: number): number {
    for (let i = 0; i < data.length; i++) {
        if (data[i] == key) {
            return i
        }
    }

    return NaN
}