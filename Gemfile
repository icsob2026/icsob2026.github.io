source "https://rubygems.org"
# Jekyll 4 with remote theme support (compatible with Ruby 3.3)
gem "jekyll", "~> 4.4"

# If you want to use GitHub Pages instead, comment out the line above and
# uncomment the line below. Run `bundle update github-pages` to upgrade.
# gem "github-pages", group: :jekyll_plugins

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-remote-theme"
  gem "jekyll-include-cache"
  gem "jekyll-seo-tag"
  gem "jekyll-target-blank"
end

gem 'wdm', '>= 0.1.0' if Gem.win_platform?

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1.2"
  gem "tzinfo-data"
end

gem "webrick", "~> 1.7"
