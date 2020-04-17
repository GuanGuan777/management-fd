module.exports = {
    presets: ["@vue/app"],
    plugins: [
        // element官方教程
        [
            "component",
            {
                libraryName: "element-ui",
                styleLibraryName: "theme-chalk"
            }
        ]
    ]
};


// {
//     presets: ["@vue/app"]

// };

// {
//     "presets": [
//         ["env", {
//             "modules": false
//         }],
//         ["es2015", {
//             "modules": false
//         }], "stage-2"
//     ],
//     "plugins": [
//         ["component", [{
//             "libraryName": "element-ui",
//             "styleLibraryName": "theme-chalk"
//         }]], "transform-runtime"
//     ],
//     "comments": false,
//     "env": {
//         "test": {
//             "presets": ["env", "stage-2"],
//             "plugins": ["istanbul"]
//         }
//     }
// }