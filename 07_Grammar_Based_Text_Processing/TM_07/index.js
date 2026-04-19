function parseRobots(txt) {
  const result = {
    agents: {},
    Sitemap: []
  };

  let currentAgent = null;
  const lines = txt.split(/\r?\n/);

  for (let line of lines) {
    const cleanLine = line.split('#')[0].trim();
    if (!cleanLine) continue;

    const separatorIdx = cleanLine.indexOf(':');
    if (separatorIdx === -1) continue;

    const key = cleanLine.substring(0, separatorIdx).trim().toLowerCase();
    const value = cleanLine.substring(separatorIdx + 1).trim();

    if (key === 'user-agent') {
      currentAgent = value.toLowerCase();

      if (!result.agents[currentAgent]) {
        result.agents[currentAgent] = {
          Allow: [],
          Disallow: []
        };
      }
    } else if (key === 'allow' && currentAgent) {
      if (value !== '') {
        result.agents[currentAgent].Allow.push(value);
      }
    } else if (key === 'disallow' && currentAgent) {
      if (value !== '') {
        result.agents[currentAgent].Disallow.push(value);
      }
    } else if (key === 'sitemap') {
      if (value !== '') {
        result.Sitemap.push(value);
      }
    } else if (key === 'host') {
      if (value !== '') {
        result.Host = value;
      }
    }
  }

  return result;
}

module.exports = parseRobots;