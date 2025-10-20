# Contributing to App-DTox

First off, thank you for considering contributing to App-DTox! It's people like you that make App-DTox such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, [make one](https://github.com/Anaswar-ash/App-DTox/issues/new)! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

### Fork & create a branch

If this is something you think you can fix, then [fork App-DTox](https://github.com/Anaswar-ash/App-DTox/fork) and create a branch with a descriptive name.

A good branch name would be (where issue #38 is the ticket you're working on):

```sh
git checkout -b 38-add-awesome-new-feature
```

### Get the test suite running

Make sure you get the test suite running before you start coding. You can find instructions on how to run the tests in the [Getting Started Guide](docs/test.md).

### Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first :smile_cat:

### Make a Pull Request

At this point, you should switch back to your main branch and make sure it's up to date with App-DTox's main branch:

```sh
git remote add upstream git@github.com:Anaswar-ash/App-DTox.git
git checkout main
git pull upstream main
```

Then update your feature branch from your local copy of main, and push it!

```sh
git checkout 38-add-awesome-new-feature
git rebase main
git push --force-with-lease origin 38-add-awesome-new-feature
```

Finally, go to GitHub and [make a Pull Request](https://github.com/Anaswar-ash/App-DTox/compare)

## How to get in touch

If you need help, you can reach out to us at [INSERT CONTACT METHOD].

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.
