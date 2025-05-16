module.exports = function (api) {
    api.cache(true);
    return {
    presets: ['babel-preset-expo'],
    // Temporarily commenting out reanimated to see if the app starts
    // plugins: ['react-native-reanimated/plugin'],
    };
};