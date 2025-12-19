import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Определяем базовый путь в зависимости от режима
const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [vue()],
  // Для продакшена: /vuepractice/, для разработки: /
  base: isProduction ? '/vuepractice/' : '/',
  
  // Конфигурация сервера разработки
  server: {
    port: 5173,
    // Для разработки убедимся что пути работают правильно
    proxy: {}
  },
  
  // Конфигурация сборки
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Создаем sourcemap только для разработки
    sourcemap: !isProduction,
    rollupOptions: {
      input: './index.html'
    }
  }
})
