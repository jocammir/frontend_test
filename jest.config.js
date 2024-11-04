
module.exports = {
    preset: "jest-preset-preact",
    testEnvironment: 'jsdom',
    setupFiles: [
        "<rootDir>/tests/__mocks__/setupTests.js"
    ],
    setupFilesAfterEnv: [
        "<rootDir>/tests/__mocks__/setupTestConfig.js"
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    testMatch: [
        "**/tests/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/tests/__mocks__/"
    ],
    moduleFileExtensions: ['js', 'jsx'],
};
