module.exports={
    resolve: {
        fallback: { "url": require.resolve("url/") },
        fallback: { "path": require.resolve("path-browserify") },
        fallback: { "stream": require.resolve("stream-browserify") },
        fallback: { "buffer": require.resolve("buffer/") },
        fallback: { "querystring": require.resolve("querystring-es3") },
        fallback: { "zlib": require.resolve("browserify-zlib") },
        fallback: { "crypto": require.resolve("crypto-browserify") },
        fallback: { "http": require.resolve("stream-http") }
       
    }
};
let fs;
if (typeof window === 'undefined') {
    // We're in Node.js environment
    fs = require('fs');
} else {
    // We're in a browser environment, provide a fallback or alternative
    fs = {
        // Provide mock methods or empty implementations
        readFile: () => {},
        writeFile: () => {},
        // Add other necessary methods
    };
}

