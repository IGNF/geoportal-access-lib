/* global module */
if (module.hot) {
    const context = require.context(
        "mocha-loader!./end-to-end/", // Process through mocha-loader
        true, // Skip recursive processing
        /test(_|-).*.js/ // Pick only files ending with .test.js
    );

    // Execute each test suite
    context.keys().forEach(context);
}
