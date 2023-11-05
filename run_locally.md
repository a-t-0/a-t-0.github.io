# Instructions to host Locally
```sh
sudo gem install bundler jekyll
bundle install
bundle exec jekyll build
```

Or:
```sh
yes | sudo apt install gnupg2
gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
\curl -sSL https://get.rvm.io | bash -s stable
rvm pkg install openssl
rvm reinstall 2.7.6 --with-openssl-dir=/home/$(whoami)/.rvm/usr
\curl -sSL https://get.rvm.io | bash -s stable --rails
yes | sudo apt  install ruby-bundler
yes | sudo apt install ruby-dev

#it clone git@github.com:a-t-0/a-t-0.github.io.git
#cd a-t-0.github.io

bundle config set --local path 'vendor/bundle'
bundle install
```
And then serve it with:
```sh
bundle exec jekyll serve
```

## File Purpose Overview
The `Gemfile` and `Gemfile.lock` are to allow `bundle` to host the website locally.
The `CNAME` is for GitHub to host this file on <name>.github.io.