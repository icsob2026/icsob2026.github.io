Webpage: https://icsob2026.github.io/
Email: icsob2026@gmail.com

# ICSOB 2026 Conference Website

This is the official website for the **17th International Conference on Software Business (ICSOB 2026)**, to be held in **Gothenburg, Sweden, October 26–28, 2026**.

ICSOB attracts both researchers and practitioners concerned with software-intensive business. The conference brings together participants to share findings and experiences from the field of software-intensive business, covering topics such as software product management, software ecosystems, open source software, agile and lean methods, AI-driven software development, and digital transformation.

The site is built with [Jekyll](https://jekyllrb.com/) using the [jekyll-theme-conference](https://github.com/DigitaleGesellschaft/jekyll-theme-conference) theme (v4.0.1).

---

## Local Installation

### Requirements

- **Ruby** >= 2.7 (recommended: Ruby 3.x)
  Install via [RubyInstaller](https://rubyinstaller.org/) on Windows or `rbenv`/`rvm` on macOS/Linux.
- **Bundler**
  ```
  gem install bundler
  ```

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/icsob2026/icsob2026.github.io.git
   cd icsob2026.github.io
   ```

2. Install dependencies:
   ```
   bundle install
   ```

### Running Locally

```
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

To enable live reload during development:
```
bundle exec jekyll serve --livereload
```

> **Note:** After changing `_config.yml`, restart the server — it is not reloaded automatically.
