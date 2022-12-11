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
    - [This README.md file has been written keeping in mind](#this-readmemd-file-has-been-written-keeping-in-mind)


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

- `primary` **(required)**: The main color of your brand
- `primary-dark` _(optional auto-generated)_: The darker version of the `primary` color
- `primary-content` _(optional auto-generated)_: The color to use for text and icons on top of the `primary` color
  
<br>

- `secondary` **(required)**: The secondary color of your brand
- `secondary-dark` _(optional auto-generated)_: The darker version of the `secondary` color
- `secondary-content` _(optional auto-generated)_: The color to use for text and icons on top of the `secondary` color

<br>

- `accent` **(required)**: The accent color of your brand
- `accent-dark` _(optional auto-generated)_: The darker version of the `accent` color
- `accent-content` _(optional auto-generated)_: The color to use for text and icons on top of the `accent` color

<br>

- `neutral` **(required)**: The neutral color of your brand
- `neutral-dark` _(optional auto-generated)_: The darker version of the `neutral` color
- `neutral-content` _(optional auto-generated)_: The color to use for text and icons on top of the `neutral` color

<br>

- `base` **(required)**: The base color of your brand
- `base-dark` _(optional auto-generated)_: The darker version of the `base` color
- `base-darkest` _(optional auto-generated)_: The darkest version of the `base` color
- `base-content` _(optional auto-generated)_: The color to use for text and icons on top of the `base` color

<br>

- `info` _(optional)_: The info color of your brand
- `info-content` _(optional)_: The color to use for text and icons on top of the `info` color
- `warning` _(optional)_: The warning color of your brand
- `warning-content` _(optional)_: The color to use for text and icons on top of the `warning` color
- `error` _(optional)_: The error color of your brand
- `error-content` _(optional)_: The color to use for text and icons on top of the `error` color

<br>

![color-palette](https://github.com/chempogonzalez/tailwind-semantic-setup/blob/main/assets/palette.png)

<br>

This approach allows you to have a consistent color palette for your brand with different themes in a very simple way.
<br>

The colors approach is mainly based on [daisyui colors palette](https://daisyui.com/docs/colors) but adding some other nice features to make it more customizable/extendable for your brand.

<br>
<br>

> Created with JavaScript! ⚡ and latin music 🎺🎵

### This README.md file has been written keeping in mind

- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)
- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
