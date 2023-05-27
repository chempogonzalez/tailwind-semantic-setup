# 🧬 tailwind-semantic-setup

[![npm version](https://img.shields.io/npm/v/tailwind-semantic-setup?color=blue&style=flat-square)](https://www.npmjs.com/package/tailwind-semantic-setup)

Smart multi-theme tool for better semantic Design Systems


## 🚀 **Features**
- ✅ Multiple themes support
- 🔥 Auto-generate darker and contrast colors _(better readability)_
- 📦 All [official tailwind plugins](https://tailwindcss.com/docs/plugins#official-plugins) included by default
- 🚀 Custom addons to make your life easier:
   -  `theme name variants` to set classes only for a specific theme
   -  `wh` utility to set width and height at the same time
   -  `circle` to set same width and height with border-radius
   -  `hocus` to set hover and focus at the same time
   -  ...




## 📦 **Installation**
```bash
# NPM
npm install -D tailwind-semantic-setup

# PNPM
pnpm add -D tailwind-semantic-setup
```

<br>

## 💻 **Usage example**

### 🟣 1. Wrap your tailwind config and set your themes
In your tailwind config file, wrap your tailwind config with the `withSemanticSetup` function.
<br>
With the `semanticSetup` property you can setup your themes to be handled automatically.

```js
// tailwind.config.js
const { withSemanticSetup } = require('tailwind-semantic-setup')

module.exports = withSemanticSetup({
  /* ... your tailwind config */
  semanticSetup: {
    themes: [
      {
        name: 'my-brand',
        colors: {
          primary: '#e0a82e',
          secondary: '#f9d72f',
          accent: '#00ffff',
          neutral: '#181830',
          root: '#ffffff',
        },
      },
      // ... other themes
    ],
  },
})
```

### 🟣 2. Add the `data-theme` attribute to your html code
You can put it where you want, but it's recommended to put it in the html tag to make it global accessible for the entire application.
```html
<html data-theme="my-brand">
  <!-- ... -->
</html>
```

### 🟣 3.  Use the theme classes
```html
<div class="bg-primary text-primary-content">
  <!-- ... -->
</div>
```

<br>

---

<br>

## 📖 **Documentation**

### 🎨 **Themes**
You can define multiple themes in the `semanticSetup` property of your tailwind config.
<br>
Each theme must have a `name` and a `colors` object.



```js
// tailwind.config.js
const { withSemanticSetup } = require('tailwind-semantic-setup')

module.exports = withSemanticSetup({
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
          root: '#ffffff',
        },
      },
      // ... other themes
    ],
  },
})
```

#### 🟠 **`name`** _(required)_
The name of the theme. It will be used to generate the classes and the _**data-theme**_ attribute value.

#### 🟠 **`preferredColorScheme`** _(optional)_
You can set your preferences for the color scheme to be used in the user's browser. It will set _**color-scheme**_ css property

#### 🟠 **`colors`** _(required)_
Semantic Setup provides you a semantic default setup but **you can add your custom colors**.
<br>

Here you can see the default colors and the ones that are auto-generated for you:

##### **(Required - added by default)**
▪️ `primary`: The main color of your brand<br>
▪️ `secondary`: The secondary color of your brand<br>
▪️ `accent`: Color to have high color contrasts and highlight.<br>
▪️ `neutral`: The neutral color of your brand<br>
▪️ `root`: The base color of your brand (background color)

▪️ `info`: The info color of your brand<br>
▪️ `warning`: The warning color of your brand<br>
▪️ `error`: The error color of your brand
<br>

##### **(Optional - auto-generated for Required colors)**
- `(colorName)-dark`: The darker version of the (colorName) color _(i.e. `primary-dark`)_
- `(colorName)-content`: The readable color to use for text and icons on top of the (colorName) color _(i.e. `primary-content`)_
- `root-darkest` _(just for base color)_: The darkest version of the `root` color

<br>


<br>


![color-palette-image](https://github.com/chempogonzalez/tailwind-semantic-setup/blob/main/assets/palette.png)

<br>

This approach allows you to have a consistent color palette for your brand with different themes in a very simple way.
<br>

The default colors approach is mainly based on [daisyui colors palette](https://daisyui.com/docs/colors) but adding some other nice features to make it more customizable/extendable for your brand.

<br>
<br>


### 🔌 **Default Plugins activate / deactivate**
By default, all [official tailwind plugins](https://tailwindcss.com/docs/plugins#official-plugins) are activated.
<br>
You can deactivate them individually using the `plugins` property of the `semanticSetup` object in your tailwind config file.

Here you can see the default plugins configuration:
```js
// tailwind.config.js
const { withSemanticSetup } = require('tailwind-semantic-setup')

module.exports = withSemanticSetup({
  // ... your tailwind config
  semanticSetup: {
    plugins: {
      // @tailwindcss/typography
      'typography': true,
      // @tailwindcss/forms
      'forms': true,
      // @tailwindcss/line-clamp
      // Deactivated by default because it's part of tailwindcss v3.3.0
      'line-clamp': false,
      // @tailwindcss/aspect-ratio
      'aspect-ratio': true,
    },
  },
})
```



### 🚀 **Custom Addons**

#### 🟠 **`theme name variants`**
You can set classes only for a specific theme using the theme name variants.
<br>
The variant has the following format: `theme-(your-theme-name):class`

```html
<div class="p-4 theme-my-brand:p-8">
  <!-- ... -->
</div>
```

#### 🟠 **`wh`**
You can set width and height at the same time.
<br>

```html
<div class="wh-10">
  <!-- ... -->
</div>
```

#### 🟠 **`circle`**
You can set a circle shape setting same width and height.

```html
<div class="circle-8">
  <!-- ... -->
</div>
```

#### 🟠 **`hocus`**
You can set a hover and focus state using the `hocus` utility.

```html
<div class="bg-primary hocus:bg-primary-dark">
  <!-- ... -->
</div>
```

<br>
<br>



> Created with JavaScript! ⚡ and latin music 🎺🎵

### This README.md file has been written keeping in mind

- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/)
- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
