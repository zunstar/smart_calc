import { defineConfig } from 'vite'; // Vite 설정을 정의하기 위한 함수
import react from '@vitejs/plugin-react'; // React 플러그인을 가져오기
import path from 'path'; // 경로 모듈을 가져오기

export default defineConfig({
  plugins: [
    react(), // React 플러그인 사용 설정
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // '@'를 사용하여 src 디렉터리를 참조하도록 설정
    },
  },
  define: {
    'process.env': {
      VITE_FIREBASE_API_KEY: process.env.VITE_FIREBASE_API_KEY,
      VITE_FIREBASE_AUTH_DOMAIN: process.env.VITE_FIREBASE_AUTH_DOMAIN,
      VITE_FIREBASE_PROJECT_ID: process.env.VITE_FIREBASE_PROJECT_ID,
      VITE_FIREBASE_STORAGE_BUCKET: process.env.VITE_FIREBASE_STORAGE_BUCKET,
      VITE_FIREBASE_MESSAGING_SENDER_ID:
        process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      VITE_FIREBASE_APP_ID: process.env.VITE_FIREBASE_APP_ID,
      VITE_FIREBASE_MEASUREMENT_ID: process.env.VITE_FIREBASE_MEASUREMENT_ID,
    },
  },
  server: {
    port: 5174, // 개발 서버 포트 설정
  },
});
