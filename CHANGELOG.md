# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.1.0](https://github.com/stopyransky/fh-hooks/compare/v4.0.0...v4.1.0) (2021-12-26)


### Features

* expose styleState from useInlineStyle ([73826fc](https://github.com/stopyransky/fh-hooks/commit/73826fc0b77c8d38596c993e991e9459cdf1c646))

# [4.0.0](https://github.com/stopyransky/fh-hooks/compare/v3.2.0...v4.0.0) (2021-12-25)


### Features

* useInlineStyle to return CSSProperties to multiple elements ([f6dce84](https://github.com/stopyransky/fh-hooks/commit/f6dce84519ee758945a6b4ec963ee43da98d3c12))


### BREAKING CHANGES

* style object is not containing CSSProperties but is a Record<string, CSSProperties>

# [3.2.0](https://github.com/stopyransky/fh-hooks/compare/v3.1.0...v3.2.0) (2021-12-15)


### Features

* **toggle flag:** add flag option to toggle on useClickAway ([5c85e91](https://github.com/stopyransky/fh-hooks/commit/5c85e911d80ff776d2dfd601fa7111d0c81c2941))

# [3.1.0](https://github.com/stopyransky/fh-hooks/compare/v3.0.0...v3.1.0) (2021-12-15)


### Features

* add triggerEvent property to useClickAway to enable closing on hover ([6448fc5](https://github.com/stopyransky/fh-hooks/commit/6448fc5647346ded87efbb8ccd2ea1eb73a5000a))

# [3.0.0](https://github.com/stopyransky/fh-hooks/compare/v2.1.1...v3.0.0) (2021-10-26)


### Features

* **useinlinestyle:** allow style to be an object containing CSSProperties ([fbdd59c](https://github.com/stopyransky/fh-hooks/commit/fbdd59c0e75793e1de35b21c4ebc9cfeca00ecfd))


### BREAKING CHANGES

* **useinlinestyle:** useInlineStyle can be used in new way, old ways will still work

## [2.1.1](https://github.com/stopyransky/fh-hooks/compare/v2.1.0...v2.1.1) (2021-10-11)


### Bug Fixes

* add CustomReducer type for valid TS syntax and linting ([27b65be](https://github.com/stopyransky/fh-hooks/commit/27b65be9c94d61e14281f68d0792a21fdb579f29))

# [2.1.0](https://github.com/stopyransky/fh-hooks/compare/v2.0.2...v2.1.0) (2020-11-12)


### Features

* add useObjectArray hook, tests, and common utils ([26df8ef](https://github.com/stopyransky/fh-hooks/commit/26df8ef25b44a0ecee99004e603561c1f41fb931))

## [2.0.2](https://github.com/stopyransky/fh-hooks/compare/v2.0.1...v2.0.2) (2020-10-30)

## [2.0.1](https://github.com/stopyransky/fh-hooks/compare/v2.0.0...v2.0.1) (2020-10-29)

# [2.0.0](https://github.com/stopyransky/fh-hooks/compare/v1.5.0...v2.0.0) (2020-10-27)

# [1.5.0](https://github.com/stopyransky/fh-hooks/compare/v1.4.0...v1.5.0) (2020-10-27)


### Features

* add commit linter and make husky to check commit message before commiting ([d3dffd2](https://github.com/stopyransky/fh-hooks/commit/d3dffd2b5d8665e96d2c555581f294a49ed91514))

# [1.4.0](https://github.com/stopyransky/fh-hooks/compare/v1.3.9...v1.4.0) (2020-10-27)


### Bug Fixes

* change repository.url in package.json to https to allow access of semantic-release ([fd48d77](https://github.com/stopyransky/fh-hooks/commit/fd48d77f79270a0d5ec1907b1ae24d47ee943200))
* reset package.json version to 0.0.0-dev ([276cbb7](https://github.com/stopyransky/fh-hooks/commit/276cbb78b52b963c13cf686ffad1d09fef449df3))
* update travis with env vars ([98e6f2a](https://github.com/stopyransky/fh-hooks/commit/98e6f2a54878409b0fc7f1f45f91f0e715ad71af))


### Features

* install semantic-release packages and initial setup ([c0ca30f](https://github.com/stopyransky/fh-hooks/commit/c0ca30fbd84e5646045c127320c4f846e6fd52d6))
