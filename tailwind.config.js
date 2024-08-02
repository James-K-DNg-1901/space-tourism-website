/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'HomeDesk': "url('/src/assets/home/background-home-desktop.jpg')",
        'HomeTablet': "url('/src/assets/home/background-home-tablet.jpg')",
        'HomeMobile': "url('/src/assets/home/background-home-mobile.jpg')",

        'DesDesk': "url('/src/assets/destination/background-destination-desktop.jpg')",
        'DesTable': "url('/src/assets/destination/background-destination-tablet.jpg')",
        'DesMobile': "url('/src/assets/destination/background-destination-mobile.jpg')",

        'CrewDesk': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'CrewTable': "url('/src/assets/crew/background-crew-tablet.jpg')",
        'CrewMobile': "url('/src/assets/crew/background-crew-mobile.jpg')",

        'TechDesk': "url('/src/assets/technology/background-technology-desktop.jpg')",
        'TechTable': "url('/src/assets/technology/background-technology-tablet.jpg')",
        'TechMobile': "url('/src/assets/technology/background-technology-mobile.jpg')",
      },
      spacing: {
        'Desktop': "1024px",
        'Mobile': "812px",
        'NavDesktop': "136px",
        'NavTablet': "96px",
        'NavMobile': "88px",
        'DeskContent': '888px',
        'MobileContent': '724px',

      },
      colors: {
        'Blue-300': 'rgb(208, 214, 249)',
        'Blue-900': 'rgb(11, 13, 23)',
      },
      fontFamily: {
        'Barlow': ["Barlow", "sans-serif"],
        'BarlowCondensed': ["Barlow Condensed", "sans-serif"],
        'Bellefair': ["Bellefair", "serif"]
      },
      fontSize: {
        '10xl': '145px'
      }
    },
  },
  plugins: [],
}