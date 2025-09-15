# Smart Flow - Plataforma de Automatización AI

<div align="center">
  <h3>🚀 Automatización Inteligente para Empresas Latinoamericanas</h3>
  <p>Plataforma moderna de automatización de procesos empresariales con IA para reducir costos, ahorrar tiempo y mejorar el servicio al cliente.</p>
</div>

## 📋 Descripción

Smart Flow es una aplicación web fullstack diseñada para una startup latinoamericana especializada en automatización AI y optimización de procesos empresariales. La plataforma ofrece soluciones automatizadas inteligentes que ayudan a las empresas a:

- ✅ Reducir costos operativos
- ⏱️ Ahorrar tiempo en procesos repetitivos
- 🤝 Mejorar la atención al cliente
- 📊 Optimizar flujos de trabajo

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** con TypeScript
- **Vite** para desarrollo y construcción rápida
- **Wouter** para enrutamiento ligero
- **Radix UI** + **shadcn/ui** para componentes accesibles
- **TailwindCSS** para estilos responsive
- **TanStack React Query** para gestión de estado del servidor
- **react-i18next** para internacionalización (Español/Inglés)
- **Framer Motion** para animaciones
- **Google Analytics** para analítica

### Backend
- **Express.js** con TypeScript
- **Drizzle ORM** con PostgreSQL
- **Zod** para validación de esquemas
- **Nodemailer** para envío de emails
- **Neon Database** (PostgreSQL serverless)

### Herramientas de Desarrollo
- **TypeScript** en modo estricto
- **Vite** con hot module replacement
- **ESBuild** para transpilación rápida
- **PostCSS** + **Autoprefixer**

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- PostgreSQL (o cuenta en Neon Database)

### 1. Clonar el repositorio
```bash
git clone <tu-repositorio>
cd smart-flow
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto:

```env
# Base de datos
DATABASE_URL="postgresql://usuario:contraseña@host:puerto/database"

# Google Analytics (opcional)
VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX"

# Email (para formulario de contacto)
SMTP_HOST="tu-smtp-host"
SMTP_PORT=587
SMTP_USER="tu-email@dominio.com"
SMTP_PASS="tu-contraseña"

# Puerto del servidor (default: 5000)
PORT=5000
```

### 4. Ejecutar migraciones de base de datos
```bash
npm run db:migrate
```

### 5. Iniciar el servidor de desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5000`

## 📁 Estructura del Proyecto

```
smart-flow/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilidades y configuración
│   │   ├── i18n/          # Archivos de traducción
│   │   └── App.tsx        # Componente principal
│   └── index.html
├── server/                 # Backend Express
│   ├── routes.ts          # Rutas de la API
│   ├── storage.ts         # Interface de almacenamiento
│   ├── vite.ts           # Configuración de Vite
│   └── index.ts          # Servidor principal
├── shared/                 # Código compartido
│   └── schema.ts          # Esquemas de base de datos
├── drizzle/               # Migraciones de BD
├── vite.config.ts         # Configuración de Vite
├── tailwind.config.ts     # Configuración de Tailwind
└── package.json
```

## 🎨 Características de Diseño

- **Tema Oscuro**: Diseño moderno con modo oscuro por defecto
- **Color Principal**: Verde eléctrico (#00FF9D) como acento de marca
- **Tipografía**: Fuente Inter para legibilidad técnica
- **Responsive**: Diseño mobile-first con breakpoints de Tailwind
- **Componentes**: Estética profesional inspirada en Linear, Notion y Vercel

## 📱 Funcionalidades

### Secciones Principales
- **Hero Section**: Presentación principal con call-to-action
- **Servicios**: Auditoría de procesos, implementación, mantenimiento y consultoría AI
- **Portafolio**: Casos de éxito y proyectos realizados
- **Sobre Nosotros**: Información del equipo y la empresa
- **Blog**: Artículos sobre automatización y AI
- **Contacto**: Formulario funcional con envío de emails
- **WhatsApp Float**: Botón flotante para contacto directo

### Características Técnicas
- **Internacionalización**: Soporte para Español e Inglés
- **Analytics**: Integración con Google Analytics
- **SEO**: Meta tags optimizados para buscadores
- **Performance**: Carga rápida y optimizada
- **Accesibilidad**: Componentes accesibles con Radix UI

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo
npm run build           # Construye para producción
npm run preview         # Vista previa de la build

# Base de datos
npm run db:generate     # Genera migraciones
npm run db:migrate      # Ejecuta migraciones
npm run db:studio       # Abre Drizzle Studio

# Linting y formato
npm run lint            # Verifica el código
npm run type-check      # Verifica tipos de TypeScript
```

## 🌐 Despliegue

### En Replit
1. El proyecto está optimizado para Replit
2. Configura las variables de entorno en el panel de secretos
3. Ejecuta `npm run dev` para iniciar

### En otros proveedores
1. Asegúrate de configurar todas las variables de entorno
2. Ejecuta `npm run build` para generar la build de producción
3. Sirve los archivos estáticos desde `dist/public/`
4. El servidor debe ejecutarse en el puerto especificado en `PORT`

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commitea tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Desarrollo
- Usar TypeScript para type safety
- Seguir las convenciones de naming establecidas
- Mantener componentes pequeños y reutilizables
- Escribir tests para funcionalidades críticas
- Documentar código complejo

## 📄 Licencia

Este proyecto es privado y pertenece a Smart Flow. Todos los derechos reservados.

## 📞 Contacto

- **Website**: [Smart Flow](https://tu-dominio.com)
- **Email**: contacto@smartflow.com
- **WhatsApp**: +1234567890

---

<div align="center">
  <p>Hecho con ❤️ para automatizar el futuro de las empresas latinoamericanas</p>
</div>
