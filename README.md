Moodly
-----------------

[![Tests](https://travis-ci.org/bigpopakap/moodly.svg?branch=master)](https://travis-ci.org/bigpopakap/moodly)
[![Dependencies](https://badges.greenkeeper.io/bigpopakap/moodly.svg)](https://greenkeeper.io/)

[Moodly]([production-url]) is an website that lets you quickly log your mood. When you have thoughts or feelings to log, just quickly jot them down. You can then analyze trends and process your general mood. More information can be found on [the  website][production-url].

# Development

Moodly is developed in a git monorepo so all client, server and storage changes can move in lock-step. The repo is stored on Github:
* Github [bigpopakap/moodly][git-url]

For more information about these three components, refer to each README:
* [Client][client-readme]
* [Server][server-readme]
* [Storage][storage-readme]

# Deployment

Moodly is deployed with Github pages, running in a staging and production environment:
* [Staging][staging-url]
* [Production][production-url]

Staging is deployed automatically with all merged code. Production is deployed manually, but must pass CI and be deployed to staging first.

# Tests and CI

There will be tests and CI, I swear.

# Running and testing locally

Once there's actually code, there will actually be something to run.

# Other dependencies

Things I should add:

* Linting
* Automatic package updates

[==================== LINKS BEGIN HERE ==========================]: #

[staging-url]: https://bigpopakap.github.io/moodly/
[production-url]: https://some.link
[git-url]: https://github.com/bigpopakap/moodly

[client-readme]: ./client/README.md
[server-readme]: ./server/README.md
[storage-readme]: ./storage/README.md