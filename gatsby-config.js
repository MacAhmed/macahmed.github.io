module.exports = {
    plugins: [
        'gatsby-plugin-page-transitions',
        {
            resolve : `gatsby-plugin-typography`,
            options : {
                pathToConfigModule: 'src/utils/typography.js',
            },
        },
    ],
}