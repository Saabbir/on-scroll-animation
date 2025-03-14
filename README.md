# Scroll-Based Content Reveal Animation

A modern website template featuring smooth scroll-based animations and content reveal effects. This project demonstrates various advanced web development concepts using vanilla HTML, CSS, and JavaScript.

## 🌟 Key Features

1. **Sticky Scroll Animations**
   - Content reveals as you scroll
   - Elements stay fixed while scrolling through sections
   - Smooth transitions between different content pieces

2. **Two Types of Reveal Effects**
   - Progressive reveal (features section)
   - One-at-a-time reveal (feature details section)

3. **Modern Design Elements**
   - Gradient text effects
   - Beautiful typography with Google Fonts
   - Responsive layout
   - Card-based design
   - Hover effects

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (No frameworks!)
- Google Fonts (Playfair Display & Inter)

## 📚 Implementation Details

### HTML Structure
```html
<!-- Key sections in the page -->
<section id="hero">
<section id="features">
<section id="feature-details">
<section id="promo">
```

### CSS Features Used

1. **Modern Layout Techniques**
   ```css
   /* CSS Grid for side-by-side layout */
   .feature-detail {
       display: grid;
       grid-template-columns: 1fr 1fr;
   }

   /* Flexbox for centered content */
   .feature-container {
       display: flex;
       align-items: center;
       justify-content: center;
   }
   ```

2. **Sticky Positioning**
   ```css
   .feature-container {
       position: sticky;
       top: 0;
   }
   ```

3. **Smooth Animations**
   ```css
   .reveal-item {
       opacity: 0;
       transform: translateY(30px);
       transition: opacity 0.5s, transform 0.5s;
   }
   ```

4. **Gradient Text**
   ```css
   .gradient-text {
       background: linear-gradient(135deg, #6366f1, #a855f7);
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
   }
   ```

### JavaScript Techniques

1. **Scroll Position Tracking**
   ```javascript
   // Track scroll position and direction
   let lastScrollY = window.scrollY;
   const isScrollingDown = currentScrollY > lastScrollY;
   ```

2. **Scroll-Based Animations**
   ```javascript
   // Calculate scroll progress
   const scrollPosition = currentScrollY - sectionStart;
   const currentStep = Math.floor(scrollPosition / scrollSteps);
   ```

3. **Performance Optimization**
   ```javascript
   // Use requestAnimationFrame for smooth animations
   window.addEventListener('scroll', () => {
       requestAnimationFrame(updateReveal);
   });
   ```

## 🎨 Key Animation Concepts

1. **Progressive Reveal (Features Section)**
   - Items appear one after another
   - Once revealed, items stay visible
   - Uses a Set to track revealed items
   ```javascript
   const revealedItems = new Set();
   // Items stay visible after first reveal
   if (!revealedItems.has(index)) {
       item.classList.add('active');
       revealedItems.add(index);
   }
   ```

2. **Sequential Reveal (Feature Details)**
   - Shows one item at a time
   - Smooth transitions between items
   - Maintains visibility during scroll up/down
   ```javascript
   // Show current item based on scroll position
   if (isCurrentStep && isInRange) {
       item.classList.add('active');
   }
   ```

## 📱 Responsive Design

The layout adapts to different screen sizes:
```css
@media (max-width: 768px) {
    .feature-detail {
        grid-template-columns: 1fr; /* Stack on mobile */
    }
    
    .hero-content h1 {
        font-size: 2.5rem; /* Smaller text on mobile */
    }
}
```

## 🚀 Getting Started

1. Clone this repository
2. Open `index.html` in your browser
3. Scroll to see the animations in action!

## 📝 Learning Points

1. **Scroll-Based Interactions**
   - How to track scroll position
   - Calculating scroll progress
   - Triggering animations based on scroll

2. **Modern CSS**
   - CSS Grid and Flexbox
   - CSS Variables
   - Transitions and Transforms
   - Sticky positioning

3. **JavaScript Best Practices**
   - Performance optimization with requestAnimationFrame
   - Clean code organization
   - Event handling
   - State management

4. **Responsive Design**
   - Mobile-first approach
   - Media queries
   - Flexible layouts

## 🤔 How to Modify

1. **Change Colors**
   - Update gradient values in CSS
   - Modify background colors
   - Adjust text colors

2. **Adjust Timing**
   - Modify transition durations in CSS
   - Change scroll step calculations in JavaScript

3. **Add More Sections**
   - Copy existing section structure
   - Update content
   - Add new reveal animations

## 💡 Tips for Beginners

1. Start by understanding the HTML structure
2. Look at how CSS classes are organized
3. Study the JavaScript scroll calculations
4. Experiment with different values
5. Use browser dev tools to inspect elements
6. Try modifying one feature at a time 