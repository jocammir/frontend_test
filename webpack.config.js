
module.exports = {
    resolve: {
        alias: {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    moduleNameMapper: {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
    }
};

