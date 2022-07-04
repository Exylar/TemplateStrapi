module.exports = ({ env }) => ({
    "import-export-entries": {
        enabled: true,
      },
    'transformer': {
        enabled: true,
        config: {
            prefix: '/api/',
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            }
        }
    },
});