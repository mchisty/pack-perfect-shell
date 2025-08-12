import type { CapacitorConfig } from '@capacitor/cli';

// Capacitor configuration for Pack Perfect native shell
// - Loads the live web app
// - Minimal permissions, no analytics
// - Splash/StatusBar configured; portrait lock, back behavior and external
//   link handling are added in native code after `npx cap add ios/android`.

const config: CapacitorConfig = {
  appId: 'com.packperfect.app',
  appName: 'Pack Perfect',
  webDir: 'dist',
  server: {
    // Production: load the live web app directly
    url: 'https://app--pack-perfect-ed6e5678.base44.app/',
    cleartext: true,
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false, // hide after first page load or small timeout
      backgroundColor: '#0A0D14',
      showSpinner: true,
      androidScaleType: 'CENTER_CROP',
    },
    StatusBar: {
      overlaysWebView: true,
      style: 'LIGHT',
      backgroundColor: '#00000000', // transparent
    },
  },
};

export default config;
