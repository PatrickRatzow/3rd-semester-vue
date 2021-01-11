module.exports = {
    mount: {
        src: "/dist",
        public: "/"
    },
    install: [
        "bulma/bulma.sass",
    ],
    plugins: [
        "@snowpack/plugin-vue",
        "@snowpack/plugin-dotenv",
        "@snowpack/plugin-sass"
    ]
}