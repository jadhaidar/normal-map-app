# Contributing to normal-map.app

Thank you for your interest in contributing to normal-map.app! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots if applicable
- Browser and OS information
- Sample images (if relevant)

### Suggesting Features

Feature requests are welcome! Please:
- Check if the feature has already been suggested
- Provide a clear description of the feature
- Explain why this feature would be useful
- Include mockups or examples if possible

### Pull Requests

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/my-new-feature
   ```

2. **Make your changes**
   - Keep changes focused and atomic
   - Follow the existing code style
   - Add comments for complex logic
   - Test thoroughly across different browsers

3. **Test your changes**
   ```bash
   npm run build
   npm run preview
   ```

4. **Commit your changes**
   - Use clear, descriptive commit messages
   - Reference issue numbers if applicable
   ```bash
   git commit -m "Add feature: description of feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/my-new-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of the changes
   - Link any related issues
   - Add screenshots for UI changes

## Development Guidelines

### Code Style

- Use clear, descriptive variable names
- Keep functions small and focused
- Comment complex algorithms
- Maintain consistent indentation (use Prettier!)
- Use modern JavaScript features (ES6+)

### Performance

- Test with various image sizes
- Optimize algorithms for large images
- Profile performance-critical code

### Browser Compatibility

Test your changes on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility

- Maintain ARIA labels
- Ensure keyboard navigation works
- Test with screen readers when possible
- Maintain color contrast ratios

## Project Structure

```
normal-map/
├── src/
│   └── index.html          # Main application file
├── public/                 # Build output & static assets
├── build.js               # Build script
├── package.json           # Dependencies
├── vercel.json           # Deployment config
├── LICENSE               # MIT License
├── README.md             # User documentation
└── CONTRIBUTING.md       # This file
```

## Building and Testing

```bash
# Development mode (no minification)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Areas for Contribution

We especially welcome contributions in these areas:

### High Priority
- [ ] Performance optimization for large images
- [ ] Additional export formats (TGA, DDS)
- [ ] Batch processing multiple images

### Medium Priority
- [ ] Custom lighting presets/profiles
- [ ] Animation frame preview
- [ ] Keyboard shortcuts customization

### Nice to Have
- [ ] Internationalization (i18n)
- [ ] Dark/light theme toggle
- [ ] Advanced blur options (bilateral, Gaussian)
- [ ] Image comparison slider

## Questions?

Feel free to open an issue for any questions about contributing!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
