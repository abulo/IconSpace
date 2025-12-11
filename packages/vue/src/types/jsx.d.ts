import 'vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    tagWrapper: any
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      tagWrapper: any
    }
  }
}
