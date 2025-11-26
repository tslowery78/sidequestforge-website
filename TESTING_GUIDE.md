# SideQuest Forge Website - Testing Guide

## 🚀 Quick Start

Your local server is running at: **http://localhost:8000**

Open this URL in your browser to start testing.

## ✅ Issues Fixed

1. ✅ Added theme toggle button to `privacy.html`
2. ✅ Added theme toggle button to `terms.html`
3. ✅ Added `theme.js` script to both pages

## 📋 Testing Checklist

### 1. Basic Page Loading
- [ ] Open http://localhost:8000
- [ ] Verify homepage loads without errors
- [ ] Check browser console for JavaScript errors (F12 → Console)
- [ ] Verify all images load correctly
- [ ] Check Network tab for 404 errors

### 2. Navigation Testing

#### Desktop Navigation
- [ ] Click "Home" - should scroll to top or navigate to index.html
- [ ] Click "PlateTag 66" - should scroll to section or navigate to platetag66.html
- [ ] Click "About" - should scroll to about section
- [ ] Click "Apps" - should scroll to apps section
- [ ] Click "Help" - should navigate to help.html
- [ ] Click "Contact" - should scroll to contact section

#### Mobile Navigation
- [ ] Resize browser to mobile width (< 768px)
- [ ] Click hamburger menu (☰) - menu should slide down
- [ ] Click menu items - should navigate/scroll correctly
- [ ] Click outside menu - menu should close
- [ ] Test on all pages: index, platetag66, help, privacy, terms

### 3. Theme Toggle Testing

Test on ALL pages:
- [ ] **index.html** - Click theme toggle (🌙/☀️)
- [ ] **platetag66.html** - Click theme toggle
- [ ] **help.html** - Click theme toggle
- [ ] **privacy.html** - Click theme toggle (NEWLY FIXED)
- [ ] **terms.html** - Click theme toggle (NEWLY FIXED)

For each page:
- [ ] Verify theme changes from dark to light
- [ ] Verify theme changes from light to dark
- [ ] Refresh page - theme should persist
- [ ] Navigate to another page - theme should persist

### 4. Form Testing

#### Newsletter Form (Footer)
- [ ] Scroll to footer on any page
- [ ] Enter valid email address
- [ ] Click "Subscribe"
- [ ] Verify "Thanks for subscribing!" message appears
- [ ] Try invalid email (no @ symbol) - should show validation error
- [ ] Try empty submission - should show validation error

#### Coming Soon Form (index.html - Apps section)
- [ ] Scroll to "Coming Soon" app card
- [ ] Enter email
- [ ] Click "Notify Me"
- [ ] Verify success message

#### Beta Signup Form (platetag66.html)
- [ ] Navigate to platetag66.html
- [ ] Scroll to "Development Status" section
- [ ] Enter email in beta signup form
- [ ] Click "Sign Me Up"
- [ ] Verify success message

#### Launch Notification Form (platetag66.html)
- [ ] Scroll to "Be Ready for Launch Day!" section
- [ ] Enter email
- [ ] Click "Notify Me at Launch"
- [ ] Verify success message

### 5. Image Modal Testing (platetag66.html)

- [ ] Navigate to platetag66.html
- [ ] Scroll to "Screenshots" section
- [ ] Click any screenshot image
- [ ] Verify modal opens with full-size image
- [ ] Verify caption displays correctly
- [ ] Verify image counter shows (e.g., "1 / 10")

#### Desktop Testing
- [ ] Click right arrow (›) - should show next image
- [ ] Click left arrow (‹) - should show previous image
- [ ] Press Right Arrow key - should show next image
- [ ] Press Left Arrow key - should show previous image
- [ ] Press Escape key - modal should close
- [ ] Click X button - modal should close
- [ ] Click outside image (on dark background) - modal should close

#### Mobile Testing
- [ ] Tap any screenshot - modal should open
- [ ] Swipe left - should show next image
- [ ] Swipe right - should show previous image
- [ ] Tap outside image - modal should close
- [ ] Tap X button - modal should close

### 6. Responsive Design Testing

Test on different screen sizes:

#### Desktop (1920x1080)
- [ ] All content visible
- [ ] Navigation bar horizontal
- [ ] Images display at full size
- [ ] Grid layouts work correctly

#### Tablet (768x1024)
- [ ] Navigation may collapse
- [ ] Grids adapt to 2 columns
- [ ] Text remains readable
- [ ] Images scale appropriately

#### Mobile (375x667)
- [ ] Navigation menu collapses
- [ ] Hamburger menu works
- [ ] Single column layout
- [ ] Text is readable
- [ ] Buttons are tappable
- [ ] No horizontal scrolling

### 7. Link Testing

#### Internal Links
- [ ] All navigation links work
- [ ] Footer links work
- [ ] Anchor links (#about, #apps, etc.) scroll smoothly
- [ ] "Learn More" buttons navigate correctly

#### External Links
- [ ] App Store links open in new tab
- [ ] Twitter link opens in new tab
- [ ] Email links (mailto:) open email client
- [ ] All external links have `target="_blank"` and `rel="noopener noreferrer"`

### 8. Cross-Browser Testing

Test in multiple browsers:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 9. Performance Testing

- [ ] Page loads in < 3 seconds
- [ ] Images load progressively
- [ ] No JavaScript errors in console
- [ ] Smooth scrolling
- [ ] Smooth animations

### 10. Accessibility Testing

- [ ] All images have alt text
- [ ] Links have descriptive text
- [ ] Color contrast is sufficient (use browser dev tools)
- [ ] Keyboard navigation works (Tab through page)
- [ ] Focus indicators visible
- [ ] Screen reader compatible (test with VoiceOver/NVDA)

## 🐛 Known Issues

None currently! All identified issues have been fixed.

## 📝 Test Results Template

```
Date: ___________
Tester: ___________
Browser: ___________
OS: ___________

Pages Tested:
- [ ] index.html
- [ ] platetag66.html
- [ ] help.html
- [ ] privacy.html
- [ ] terms.html

Issues Found:
1. 
2. 
3. 

Notes:
```

## 🎯 Priority Tests

If you're short on time, focus on these critical tests:

1. ✅ All pages load without errors
2. ✅ Theme toggle works on all pages
3. ✅ Navigation works (desktop & mobile)
4. ✅ Forms submit successfully
5. ✅ Image modal works on platetag66.html
6. ✅ Mobile menu works
7. ✅ No broken links

## 💡 Tips

- Use browser DevTools (F12) to:
  - Check console for errors
  - Test responsive design (device toolbar)
  - Inspect network requests
  - Check accessibility

- Test on real devices when possible
- Test with slow network connection (DevTools → Network → Throttling)
- Test with JavaScript disabled (should still show content)

## 🎉 Success Criteria

The website is ready for production when:
- ✅ All pages load without errors
- ✅ All functionality works as expected
- ✅ Responsive design works on all screen sizes
- ✅ No console errors
- ✅ All links work
- ✅ Forms submit successfully
- ✅ Theme toggle works everywhere
- ✅ Mobile menu works
- ✅ Image modal works

Happy Testing! 🚀

