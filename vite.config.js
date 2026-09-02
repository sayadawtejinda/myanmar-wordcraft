import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Repo name ကို ဒီနေရာမှာ ထည့်ပါ — GitHub Pages URL ရဲ့ path နဲ့ ကိုက်ညီရမည်
  // ဥပမာ: repo name က "myanmar-wordcraft" ဆိုရင် base: '/myanmar-wordcraft/'
  base: '/myanmar-wordcraft/',
});
