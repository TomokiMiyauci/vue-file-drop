# vue-file-drop

Vue component for File DnD area and call File Select Dialog.

## :truck: Install

```bash
yarn add vue-file-drop
or
npm i vue-file-drop
```

### Use globally

```ts[~/main.ts]
import VueFileDrop from "vue-file-drop";

createApp(App).use(VueFileDrop).mount("#app");
```

### Use locally

```vue
<script>
  import { VueFileDrop } from 'vue-file-drop'

  export default {
    components: {
      VueFileDrop,
    },
  }
</script>
```

### Template

```vue
<template>
  <vue-file-drop>
</template>
```

## :package: Components

### vue-file-drop

#### Props

| Name       | Description                                                    | Default |
| ---------- | -------------------------------------------------------------- | ------- |
| `accept`   | Restricts downloads to an extension type.                      | \*      |
| `multiple` | Allows multiple files to be selected. (disables file reading!) | false   |

#### events

| Name   | Return type | Description                                                 |
| ------ | ----------- | ----------------------------------------------------------- |
| accept | `FileList`  | When file DnDed or file selected though file select dialog. |
