module.exports = {
    //...
    resolve: {
        fallback: {
            "buffer": require.resolve("buffer/"),
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/")
        }
    }
    //...
};