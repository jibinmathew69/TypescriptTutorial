function fill<idk>(array:any[], value:idk):idk[]{
    return array.map(() => value)
}

const result = fill([1, 2, 3], "a")
result.map(x => x.toUpperCase)

const result2 = fill(["a", "b", "c"], 1)
result2.map(x => x / 2)
