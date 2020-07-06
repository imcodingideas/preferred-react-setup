function IncorrectNodeEnvConfiguration(env) {
  this.name = 'IncorrectNodeEnvConfiguration';
  this.message = `NODE_ENV must be set to either "production" or "development", but the value received was "${env.NODE_ENV}"`;
}

const isProduction = env => {
  if (['production', 'development'].includes(env.NODE_ENV) === false) {
    throw new IncorrectNodeEnvConfiguration(env);
  }

  return env.NODE_ENV === 'production';
};

module.exports = isProduction;
