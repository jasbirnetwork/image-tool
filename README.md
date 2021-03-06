# Image Tools

Image tools using Python, NodeJs and Larvel framework provides different image modification tools like background remover, style transfer, black and white image to colour image.

## Prerequisites

* [Python 3.6](https://www.python.org/)
* [Php 8.0](https://www.php.net/releases/index.php/)

## Installation

```bash
git clone https://github.com/aibrain1/image-tool.git
```

Generate application key 
```bash
php artisan key:generate
```

Setup Config file for database and all project configuration 
```bash
cp .env.example .env
```

Before compiling your CSS, install your project's frontend dependencies using the Node package manager (NPM):
```bash
npm install
```

Once the dependencies have been installed using npm install, you can compile your SASS files to plain CSS using Laravel Mix. The npm run dev command will process the instructions in your webpack.mix.js file. Typically, your compiled CSS will be placed in the public/css directory:
```bash
npm run dev
```

Production ready build 
```bash
npm run production
```
