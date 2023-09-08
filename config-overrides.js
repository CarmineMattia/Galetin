module.exports = function override(config, env) {
  // Locate the rule for source maps and modify it
  const rule = config.module.rules.find(
    (rule) =>
      rule.use &&
      rule.use.some(
        (use) => use.loader && use.loader.includes("source-map-loader")
      )
  );

  if (rule) {
    rule.exclude = /node_modules\/antd/;
  }

  return config;
};
