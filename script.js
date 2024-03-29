function stringChop(str, size) {
    if (!str) {
        return []; // Return empty array if input string is null
    }

    const chunks = [];
    let i = 0;

    while (i < str.length) {
        chunks.push(str.slice(i, i + size)); // Use size instead of chunkLength
        i += size; // Use size instead of chunkLength
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10); // Parse size as an integer
alert(stringChop(str, size));
