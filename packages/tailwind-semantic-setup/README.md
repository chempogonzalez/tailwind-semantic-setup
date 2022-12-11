# 🧬 tailwind-semantic-setup
[![npm version](https://img.shields.io/npm/v/classname-manager?color=blue&style=flat-square)](https://www.npmjs.com/package/classname-manager)

Tailwind preset to enable a good semantic setup for better Design Systems

<br>

- [🧬 tailwind-semantic-setup](#-tailwind-semantic-setup)
  - [🚀 **Features**](#-features)
  - [📦 **Installation**](#-installation)
  - [💻 **Usage example**](#-usage-example)
    - [1️⃣ Add the preset to your tailwind config](#1️⃣-add-the-preset-to-your-tailwind-config)
    - [2️⃣ Add the `data-theme` attribute to your html code](#2️⃣-add-the-data-theme-attribute-to-your-html-code)
    - [3️⃣ Use the theme classes](#3️⃣-use-the-theme-classes)
  - [📖 Documentation](#-documentation)
    - [🎨 **Themes**](#-themes)
      - [🟠 **`name`** _(required)_](#-name-required)
      - [🟠 **`preferredColorScheme`** _(optional)_](#-preferredcolorscheme-optional)
      - [🟠 **`colors`** _(required)_](#-colors-required)


## 🚀 **Features**
- ✅ Multiple themes support
- 🔥 Auto-generate darker and contrast colors _(better readability)_
- 📦 All official tailwind plugins included by default
- 🚀 Custom addons to make your life easier:
   -  `theme name variants` to set classes only for a specific theme
   -  `wh` utility to set width and height at the same time
   -  `circle` to set same width and height with border-radius
   -  `hocus` to set hover and focus at the same time
   -  ...




## 📦 **Installation**
```bash
# NPM
npm install tailwind-semantic-setup

# YARN
yarn add tailwind-semantic-setup

# PNPM
pnpm add tailwind-semantic-setup
```

<br>

## 💻 **Usage example**

### 1️⃣ Add the preset to your tailwind config
With the `semanticSetup` property you can setup your themes to be handled by the preset.

```js
// tailwind.config.js
module.exports = {
  // ... your tailwind config
  semanticSetup: {
    themes: [
      {
        name: 'my-brand',
        colors: {
          primary: '#e0a82e',
          secondary: '#f9d72f',
          accent: '#00ffff',
          neutral: '#181830',
          base: '#ffffff',
        },
      },
      // ... other themes
    ],
  },
  presets: [require('tailwind-semantic-setup')],
}
```

### 2️⃣ Add the `data-theme` attribute to your html code
You can put it where you want, but it's recommended to put it in the html tag to have a global access to the theme for the entire application.
```html
<html data-theme="light">
  <!-- ... -->
</html>
```

### 3️⃣ Use the theme classes
```html
<div class="bg-primary text-secondary">
  <!-- ... -->
</div>
```

<br>

---

<br>

## 📖 Documentation

### 🎨 **Themes**
You can define multiple themes in the `semanticSetup` property of your tailwind config.
<br>
Each theme must have a `name` and a `colors` object.



```js
// tailwind.config.js

module.exports = {
  // ... your tailwind config
  semanticSetup: {
    themes: [
      {
        name: 'my-brand',
        preferredColorScheme: ['dark', 'light'],
        colors: {
          primary: '#e0a82e',
          secondary: '#f9d72f',
          accent: '#00ffff',
          neutral: '#181830',
          base: '#ffffff',
        },
      },
      // ... other themes
    ],
  },
  presets: [require('tailwind-semantic-setup')],
}
```

#### 🟠 **`name`** _(required)_
The name of the theme. It will be used to generate the classes and the _**data-theme**_ attribute value.

#### 🟠 **`preferredColorScheme`** _(optional)_
You can set your preferences for the color scheme to be used in the user's browser. It will set _**color-scheme**_ css property

#### 🟠 **`colors`** _(required)_
The colors object is where define your theme colors palette.

<style>
  .row{
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .color{
    display: flex;
    flex-direction: column;
    item-align: center;
    justify-content: center;
    gap: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:15px;
  }

  .color-circle{
    width: 40px;
    height: 40px;
    border-radius: 50%;

    outline: 2px solid transparent;
    outline-offset: 4px;

    outline-width: 1px;
    outline-color: #e6e6e6;
  }

  .primary{
    background-color: #e0a82e;
  }
  .primary-dark{
    background-color: #ba881c;
  }
  .primary-content{
    background-color: #18182f;
  }

  .secondary{
    background-color: #f9d72f;
  }
  .secondary-dark{
    background-color: #e4bf07;
  }
  .secondary-content{
    background-color: #18182f;
  }

  .accent{
    background-color: purple;
  }
  .accent-dark{
    background-color: #e4bf07;
  }
  .accent-content{
    background-color: #18182f;
  }

  .neutral{
    background-color: #181830;
  }
  .neutral-dark{
    background-color: #131325;
  }
  .neutral-content{
    background-color: #babaee;
  }


  .base{
    background-color: #fff;
  }
  .base-dark{
    background-color: #e6e6e6;
  }
  .base-darkest{
    background-color: #cfcfcf;
  }
  .base-content{
    background-color: #333333;
  }

  .info{
    background-color: #3abff8;
  }
  .info-content{
    background-color: #002b3d;
  }

  .warning{
    background-color: #fbbd23;
  }
  .warning-content{
    background-color: #382800;
  }

  .error{
    background-color: #f87272;
  }
  .error-content{
    background-color: #470000;
  }

  .grid{
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0,1fr));
    place-items: center;
    gap: 20px;
    border-radius: 20px;
    padding: 30px;
  }
</style>

<div class="grid">
  <div class="color">
    <span>Primary</span>
    <div class="color-circle primary"></div>
  </div>
  <div class="color">
    <span>Primary Dark</span>
    <div class="color-circle primary-dark"></div>
  </div>
  <div class="color">
    <span>Primary Content</span>
    <div class="color-circle primary-content"></div>
  </div>
  <div></div>
  <div class="color">
    <span>Secondary</span>
    <div class="color-circle secondary"></div>
  </div>
  <div class="color">
    <span>Secondary Dark</span>
    <div class="color-circle secondary-dark"></div>
  </div>
  <div class="color">
    <span>Secondary Content</span>
    <div class="color-circle secondary-content"></div>
  </div>
  <div></div>
  <div class="color">
    <span>Accent</span>
    <div class="color-circle accent"></div>
  </div>
  <div class="color">
    <span>Accent Dark</span>
    <div class="color-circle accent-dark"></div>
  </div>
  <div class="color">
    <span>Accent Content</span>
    <div class="color-circle accent-content"></div>
  </div>
  <div></div>
  <div class="color">
    <span>Neutral</span>
    <div class="color-circle neutral"></div>
  </div>
  <div class="color">
    <span>Neutral Dark</span>
    <div class="color-circle neutral-dark"></div>
  </div>
  <div class="color">
    <span>Neutral Content</span>
    <div class="color-circle neutral-content"></div>
  </div>
  <div></div>
  <div class="color">
    <span>Base</span>
    <div class="color-circle base"></div>
  </div>
  <div class="color">
    <span>Base Dark</span>
    <div class="color-circle base-dark"></div>
  </div>
  <div class="color">
    <span>Base Darkest</span>
    <div class="color-circle base-darkest"></div>
  </div>
  <div class="color">
    <span>Base Content</span>
    <div class="color-circle base-content"></div>
  </div>
  <div class="color">
    <span>Info</span>
    <div class="color-circle info"></div>
  </div>
  <div class="color">
    <span>Info Content</span>
    <div class="color-circle info-content"></div>
  </div>
  <div></div>
  <div></div>
  <div class="color">
    <span>Warning</span>
    <div class="color-circle warning"></div>
  </div>
  <div class="color">
    <span>Warning Content</span>
    <div class="color-circle warning-content"></div>
  </div>
  <div></div>
  <div></div>
   <div class="color">
    <span>Error</span>
    <div class="color-circle error"></div>
  </div>
  <div class="color">
    <span>Error Content</span>
    <div class="color-circle error-content"></div>
  </div>
  <div></div>
  <div></div>

</div>



