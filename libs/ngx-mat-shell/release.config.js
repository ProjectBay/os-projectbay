const libName = 'ngx-mat-shell';
const srcRoot = `libs/${libName}`;

module.exports = {
  extends: 'release.config.base.js',
  pkgRoot: `dist/${srcRoot}`,
  tagFormat: libName + '-v${version}',
  commitPaths: [`${srcRoot}/*`],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [`${srcRoot}/package.json`, `${srcRoot}/CHANGELOG.md`],
        message:
          `release(version): Release ${libName} ` +
          '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
