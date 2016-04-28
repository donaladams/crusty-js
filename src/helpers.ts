

export function grams(totalFlour: number, percent: number): number {
    return percent / 100.0 * totalFlour;
}

export function formatGrams(grams: number, precision:number = 2): string {
    if (Math.floor(grams) == grams) {
        return grams.toFixed(0);
    } else {
        return grams.toFixed(precision);
    }
}
