/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    fontSize: {
      'h1': [
        "56px",
        {
          lineHeight: "84px",
          fontWeight: "600",
          letterSpacing: "2.8px"
        }
      ],
      'h2': [
        "48px",
        {
          lineHeight: "72px",
          fontWeight: "600",
          letterSpacing: "2.4px"
        }
      ],
      'h3': [
        "40px",
        {
          lineHeight: "60px",
          fontWeight: "600",
          letterSpacing: "2px"
        }
      ],

      'h4': [
        "32px",
        {
          lineHeight: "48px",
          fontWeight: "600",
          letterSpacing: "1.6px"
        }
      ],

      'h5': [
        "28px",
        {
          lineHeight: "44px",
          fontWeight: "600",
          letterSpacing: "1.4px"
        }
      ],

      'h6': [
        "24px",
        {
          lineHeight: "40px",
          fontWeight: "600",
          letterSpacing: "1.2px"
        }
      ],

      'label-xl': [
        "20px",
        {
          lineHeight: "32px",
          letterSpacing: "1px"
        }
      ],

      'label-l': [
        '18px',
        {
          lineHeight: '28px',
          letterSpacing: '0.9px'
        }
      ],

      'label-m': [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0.8px'
        }
      ],

      'label-s': [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '0.7px'
        }
      ],

      'label-xs': [
        '12px',
        {
          lineHeight: '20px',
          letterSpacing: '0.6px'
        }
      ],

      'p-xxl': [
        '24px',
        {
          lineHeight: '48px',
          letterSpacing: '2.4px'
        }
      ],

      'p-xl': [
        '20px',
        {
          lineHeight: '40px',
          letterSpacing: '1px'
        }
      ],

      'p-l': [
        '18px',
        {
          lineHeight: '36px',
          letterSpacing: '0.9px'
        }
      ],

      'p-m': [
        '16px',
        {
          lineHeight: '32px',
          letterSpacing: '0.8px'
        }
      ],

      'p-s': [
        '14px',
        {
          lineHeight: '28px',
          letterSpacing: '0.7px'
        }
      ],

      'p-xs': [
        '12px',
        {
          lineHeight: '24px',
          letterSpacing: '0.6px'
        }
      ],

      'button-xl': [
        '20px',
        {
          lineHeight: '32px',
          letterSpacing: '4px'
        }
      ],

      'button-l': [
        '18px',
        {
          lineHeight: '28px',
          letterSpacing: '3.6px'
        }
      ],

      'button-m': [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '3.2px'
        }
      ],

      'button-s': [
        '14px',
        {
          lineHeight: '20px',
          letterSpacing: '2.8px'
        }
      ],

      'other-l': [
        '18px',
        {
          lineHeight: '22px',
          fontWeight: '700'
        }
      ],

      'other-m': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '500'
        }
      ],

      'other-s': [
        '14px',
        {
          lineHeight: '20px',
          fontWeight: '500'
        }
      ],

      'other-h5': [
        '28px',
        {
          lineHeight: '36px',
          fontWeight: '600',
        }
      ],

      'other-h6': [
        '32px',
        {
          lineHeight: '40px',
          fontWeight: '600',
        }
      ],

      'other-big': [
        '80px',
        {
          lineHeight: '98px',
          fontWeight: '500',
        }
      ],

      'en-big-title': [
        '80px',
        {
          lineHeight: '96px',
          fontWeight: '500',
          letterSpacing: '0px'
        }
      ],

      'en-big-title-s': [
        '32px',
        {
          lineHeight: '40px',
          fontWeight: '500',
          letterSpacing: '0px'
        }
      ],

      'en-big-title-m': [
        '56px',
        {
          lineHeight: '72px',
          fontWeight: '500',
          letterSpacing: '0px'
        }
      ],

      'en-h2': [
        '48px',
        {
          lineHeight: '64px',
          letterSpacing: '0px'
        }
      ],

      'en-h3': [
        '40px',
        {
          lineHeight: '52px',
          letterSpacing: '0px'
        }
      ],

      'en-h4': [
        '32px',
        {
          lineHeight: '40px',
          letterSpacing: '0px'
        }
      ],

      'en-h5': [
        '28px',
        {
          lineHeight: '36px',
          letterSpacing: '0px'
        }
      ],

      'en-l': [
        '18px',
        {
          lineHeight: '22px',
          letterSpacing: '0px'
        }
      ],

      'en-m': [
        '16px',
        {
          lineHeight: '24px',
          letterSpacing: '0px'
        }
      ],

      'en-s': [
        '14px',
        {
          lineHeight: '18px',
          letterSpacing: '0px'
        }
      ],

      'en-xs': [
        '12px',
        {
          lineHeight: '18px',
          letterSpacing: '0px'
        }
      ]
    },
    extend: {
      screens: {
        'tablet-min': { 'min': '834px' },
        'desktop': { 'max': '1376px' },
        'desktop-small': { 'max': '1040px' },
        'tablet': { 'max': '834px' },
        'xs': { 'max': '475px' },
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22.5': '5.625rem',
        '24': '6rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '30': '7.5rem',
        '39': '9.75rem',
        '41': '10.25rem',
        '43': '10.75rem',
        '50': '12.5rem',
        '60': '15rem'
      },
      colors: {
        brown: '#AA8852',
        black: '#000000',
        white: '#ffffff',
        transparent: 'transparent',
        currentColor: 'currentColor',
        main: {
          brown: '#AA8852',
          blue: '#005173',
          red: '#D93E3E',
          green: '#15803D',
          'brown-light': '#ECE7D5',
          'blue-light': '#11739C',
        },

        content: {
          80: '#292524',
          70: '#44403C',
          50: '#78716C',
          10: '#F5F5F4',
          0: '#FFFFFF',
        },

        border: {
          70: '#44403C',
          30: '#D6D3D1',
          20: '#E7E5E4',
          0: '#ffffff'
        },

        blueDark: {
          95: '#02141B',
          70: '#042937'
        },

        bg: {
          20: '#E7E5E4',
          5: '#FAFAF9',
          10: '#F5F5F4',
          0: '#ffffff'
        },
      },
      fontFamily: {
        'noto': ['"Noto Sans TC"', 'sans-serif'],
        'corm': ['"Cormorant Garamond"', 'serif'],
      },
      borderRadius: {
        '4xl': '3rem'
      },
    },
  },
  plugins: [],
}

