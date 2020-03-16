module.exports = rawRequest => {
  const lines = rawRequest.split('/n');
  const [method, path] = lines[0].split(' ');

  const body = rawRequest.split('/r/n/r/n')[1];

  return {
    method, 
    path, 
    body
  };
};
