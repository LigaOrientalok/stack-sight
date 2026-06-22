# 📊 StackSight

**Visualizador de Stack Tech** — Seleccioná tus tecnologías y exportá una card PNG lista para compartir.

![Demo](https://img.shields.io/badge/Vue_3-CDN-4fc08d?logo=vue.js)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Features

- **37 tecnologías** en 5 categorías: Frontend, Backend, IA/ML, Bases de Datos, Herramientas
- **Click para seleccionar** — la card preview se actualiza al instante
- **5 temas visuales**: Dark, Purple, Ocean, Amber, Midnight
- **Inputs editables**: nombre y rol
- **Exportación PNG** — descargá la card en alta resolución (3x)
- **Buscador** para filtrar tecnologías al instante
- **Sin backend, sin API keys, sin registro**

## 🚀 Demo en vivo

```
https://stack-sight-one.vercel.app
```

## 🛠️ Stack técnico

| tecnología | uso |
|---|---|
| [Vue 3](https://vuejs.org/) (CDN) | Reactividad y UI |
| [html2canvas](https://html2canvas.hertzen.com/) | Exportación a PNG |
| CSS Grid + Flexbox | Layout responsive |
| Vercel | Deploy |

## 📖 Cómo usar

1. Abrí la app
2. Escribí tu nombre y rol en la card preview
3. Seleccioná las tecnologías que usás (click para agregar/sacar)
4. Cambiá de tema si querés
5. Click en **"Exportar PNG"** — se descarga automáticamente

## 🧪 Desarrollo local

```bash
git clone https://github.com/LigaOrientalok/stack-sight.git
cd stack-sight
# Abrí index.html en tu navegador (no necesita build step)
```

## ☁️ Deploy en Vercel

Conectá este repo a [Vercel](https://vercel.com):

1. Creá un nuevo proyecto en Vercel
2. Importá este repositorio
3. Vercel detecta automáticamente que es estático
4. Listo — sin configuración extra

O con CLI:

```bash
npm i -g vercel
vercel --prod
```

## 📄 Licencia

MIT — hacé lo que quieras con el código.
