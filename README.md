# Adaptations Agency Website

A modern website for Adaptations Agency, showcasing our tech and strategic solutions for resilient businesses.

## Features

- Responsive design
- Contact form with EmailJS integration
- Modern UI with animations
- SEO optimized

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TheoCleret/Site_web_adaptations.git
cd adaptations
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
REACT_APP_EMAILJS_ID=your_emailjs_public_key
REACT_APP_EMAILJS_SERVICE=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE=your_emailjs_template_id
REACT_APP_EMAILJS_AUTOREPLY=your_emailjs_autoreply_template_id
REACT_APP_CONTACT_EMAIL=your_contact_email
```

4. Start the development server:
```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

This will create a `build` folder with the production-ready files.

## Deployment

The site is deployed on Vercel. Any push to the main branch will trigger an automatic deployment.

## Technologies Used

- React
- EmailJS for contact form
- AOS for animations
- CSS3 for styling

## Security

- All sensitive information is stored in environment variables
- Form validation on both client and server side
- Secure headers and configurations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and confidential. All rights reserved.
