const fs = require("fs");
const path = require("path");

module.exports = function () {
  return {
    verbose: true,
    testEnvironment: "jsdom",

    setupFiles: [require.resolve("react-app-polyfill/jsdom")],
    setupFilesAfterEnv: [path.resolve(__dirname, "jest.setup.js")],

    testMatch: [
      "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
      "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": path.resolve(
        __dirname,
        "jest/babelTransform.js"
      ),
      "^.+\\.css$": path.resolve(__dirname, "jest/cssTransform.js"),
      "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": path.resolve(
        __dirname,
        "jest/fileTransform.js"
      ),
    },
    transformIgnorePatterns: [
      "[/\\\\]node_modules[/\\\\](?!hyperapp|.+)\\.(js|jsx|mjs|cjs|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$",
    ],
  };
};
