module.exports = {
    presets: [
        ['@babel/env', {
            targets: {node: "current"},
            modules: false // do not add 'use strict' into the top of js file
        }],
        ['@babel/preset-react', {
            development: true
        }]
    ],
    plugins: [
        ["@babel/plugin-proposal-decorators", {
            legacy: true
        }]
    ]
};