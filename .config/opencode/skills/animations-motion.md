# Animations Motion Skill

## Overview

The **animations-motion** skill provides a set of reusable Framer Motion components and hooks designed to be dropped into any JDev project. It abstracts common motion patterns, automatically respects the active `ThemeContext` (dark/light) and is built to keep the UI feeling premium while staying performant.

## Components

| Component | Purpose | Typical Props |
|----------|---------|------------------------------|
| **FadeIn** | Simple fade‑in animation for any element | `duration`, `delay` |
| **SlideIn** | Slide items from a direction | `from`, `to`, `duration`, `delay` |
| **ScaleIn** | Scale elements into view | `from`, `to`, `duration`, `delay` |
| **ParallaxContainer** | Wrap a subtree to apply vertical parallax on scroll | `speed` |
| **Reveal** | Staggered reveal for child elements | `stagger`, `delay` |

## Hooks

| Hook | Purpose |
|------|---------|
| **useScrollAnimation** | Returns scroll‑progress and transform utilities that can be used directly in any component |

## Installation

The skill does not need extra installation. Just import the components or hooks where needed. Ensure `framer-motion` is a dependency:

```bash
npm install framer-motion
# or
yarn add framer-motion
```

## Usage

```jsx
import { FadeIn, SlideIn, ParallaxContainer } from 'src/components/animations';
import { useScrollAnimation } from 'src/hooks';

// Example component
const Hero = () => {
  const { yTransform } = useScrollAnimation();
  return (
    <ParallaxContainer>
      <FadeIn duration={1} delay={0.3}>
        <h1>Hello world</h1>
      </FadeIn>
    </ParallaxContainer>
  );
};
```


## Performance

All components rely on `transform` and `opacity` only, ensuring they work on GPUs. Avoid heavy layout thrashing by keeping animation code within a single `motion.div` wrapper.

For advanced detection, use `requestAnimationFrame` or throttle the scroll listener in `useScrollAnimation` if you observe performance drops on legacy devices.

---

For detailed API docs, see the individual component files.
