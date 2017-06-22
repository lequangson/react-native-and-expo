module.exports = {
  "globals": {
    "document": true,
    "window": true,
    "FileReader": true,
    "location": true,
    "localStorage": true,
    "sessionStorage": true,
    'io': true,
    "Image": true,
  },
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "semi": 0,
    "comma-dangle": ["error", "never"],
    "react/prefer-stateless-function": 0,
    "global-require": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": false
    }],
    // "jsx-curly-spacing": [2, "never", {"allowMultiline": false}],
    "react/forbid-prop-types": [0],
    "jsx-a11y/no-static-element-interactions": 0,
    "camelcase": 0,
    "max-len": [2, 120, 2],
    "no-underscore-dangle": ["error", { "allow": ["_adsrc"] }],
    // "no-tabs": 0,
    // "indent": ["error", "tab"],
    // "react/jsx-indent": [2, "tab"],
    // "react/jsx-indent-props": [2, "tab"]
  }
};
