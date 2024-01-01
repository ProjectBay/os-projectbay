const {
  utils: { getProjects },
} = require('@commitlint/config-nx-scopes');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  'scope-enum': async (ctx) => [
    2,
    'always',
    [...(await getProjects(ctx)), 'workspace'],
  ],
};
