function minCostToMoveChips(position: number[]): number {
    let odd = 0, even = 0
    for (const pos of position) {
        if ((pos & 1) === 1) {
            odd++
        } else {
            even++
        }
    }
    return Math.min(odd, even)
};
