# TechSecure Hub - Static Website

A professional cybersecurity and tech review website built as a static site for GitHub Pages hosting.

## Features

- **Responsive Design**: Mobile-first approach with desktop and tablet optimization
- **Dark/Light Mode**: Automatic theme switching with user preference storage
- **SEO Optimized**: Proper meta tags, semantic HTML, and fast loading
- **Security Focus**: Content tailored for cybersecurity professionals and enthusiasts
- **Search Functionality**: Client-side search with filter capabilities
- **Newsletter Integration**: Ready for email service integration
- **Performance Optimized**: Lazy loading, compressed assets, and minimal dependencies

## Structure

```
static-site/
├── index.html          # Homepage
├── security.html       # Security guides section
├── reviews.html        # Product reviews section
├── tutorials.html      # Tutorials section (to be created)
├── search.html         # Search page (to be created)
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # Main JavaScript functionality
├── articles/           # Individual article pages
└── images/            # Image assets (to be added)
```

## GitHub Pages Deployment

1. **Create Repository**: Create a new GitHub repository for your website
2. **Upload Files**: Upload all files from the `static-site` folder to your repository
3. **Enable GitHub Pages**: 
   - Go to repository Settings
   - Scroll to Pages section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save settings
4. **Access Website**: Your site will be available at `https://username.github.io/repository-name`

## Customization

### Changing Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary: #3b82f6;        /* Main brand color */
    --background: #f8fafc;     /* Background color */
    --foreground: #1e293b;     /* Text color */
    /* Add your custom colors */
}
```

### Adding Content
- Create new HTML files for articles in the `articles/` folder
- Update navigation links in each page's header
- Add new categories by editing the sidebar widgets

### Newsletter Integration
Replace the form action in newsletter forms with your email service:
```html
<form action="https://your-email-service.com/subscribe" method="post">
```

Popular email services for static sites:
- Mailchimp
- ConvertKit
- Formspree
- Netlify Forms

### Analytics Integration
Add your analytics code before the closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Content Guidelines

### Security Articles
- Focus on practical, actionable advice
- Include step-by-step instructions
- Reference current threat landscapes
- Provide code examples when relevant

### Product Reviews
- Include pros and cons sections
- Add rating systems (out of 10)
- Compare with competitors
- Include pricing information

### Tutorials
- Break into numbered steps
- Include screenshots or diagrams
- Provide troubleshooting sections
- Link to official documentation

## SEO Best Practices

1. **Title Tags**: Each page has unique, descriptive titles
2. **Meta Descriptions**: Concise summaries under 160 characters
3. **Heading Structure**: Proper H1-H6 hierarchy
4. **Image Alt Text**: Descriptive alt attributes for accessibility
5. **Internal Linking**: Connect related articles and pages
6. **Fast Loading**: Optimized images and minimal JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading**: Images load as needed
- **Service Worker**: Offline capabilities (optional)
- **Compression**: Minified CSS and JavaScript
- **CDN Fonts**: Google Fonts with preconnect
- **Optimized Images**: WebP format recommended

## Security Features

- **HTTPS**: Required for GitHub Pages
- **Content Security Policy**: Ready for implementation
- **No Inline Scripts**: External JavaScript files
- **Sanitized Content**: Safe HTML structure

## Maintenance

### Regular Updates
- Update article dates and content
- Refresh product reviews with current pricing
- Update security recommendations based on new threats
- Check and fix any broken links

### Content Calendar
- Security guides: Weekly
- Product reviews: Bi-weekly
- Tutorial content: Monthly
- News updates: As needed

## Support

For technical issues with the static site:
1. Check browser console for JavaScript errors
2. Validate HTML and CSS
3. Test on multiple devices and browsers
4. Review GitHub Pages build logs if deployment fails

## License

This website template is provided as-is for educational and commercial use. Customize freely for your needs.