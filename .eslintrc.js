module.exports = {
    "extends": "standard",
    "env": {
        "browser": true,
        "node": true
    },
    "globals": {
        "Vue": true,
        "VueRouter": true,
        "Vuex": true,
        "axios": true
    },
    "plugins": [
        "vue",
        "html"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "space-before-function-paren": [
            "error",
            {
                "named": "never"
            }
        ],
        "prefer-promise-reject-errors": [
            "error",
            {
                "allowEmptyReject": true
            }
        ]
    }
}