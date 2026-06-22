const TECHNOLOGIES = [
  { id: 'vue', icon: '🟢', label: 'Vue 3', cat: 'frontend' },
  { id: 'react', icon: '⚛️', label: 'React', cat: 'frontend' },
  { id: 'angular', icon: '🔴', label: 'Angular', cat: 'frontend' },
  { id: 'svelte', icon: '🧡', label: 'Svelte', cat: 'frontend' },
  { id: 'tailwind', icon: '🌊', label: 'Tailwind CSS', cat: 'frontend' },
  { id: 'bootstrap', icon: '💜', label: 'Bootstrap', cat: 'frontend' },
  { id: 'html', icon: '🌐', label: 'HTML', cat: 'frontend' },
  { id: 'css', icon: '🎨', label: 'CSS', cat: 'frontend' },
  { id: 'js', icon: '🟨', label: 'JavaScript', cat: 'frontend' },
  { id: 'ts', icon: '🔵', label: 'TypeScript', cat: 'frontend' },
  { id: 'node', icon: '💚', label: 'Node.js', cat: 'backend' },
  { id: 'python', icon: '🐍', label: 'Python', cat: 'backend' },
  { id: 'go', icon: '🔷', label: 'Go', cat: 'backend' },
  { id: 'rust', icon: '🦀', label: 'Rust', cat: 'backend' },
  { id: 'php', icon: '🐘', label: 'PHP', cat: 'backend' },
  { id: 'java', icon: '☕', label: 'Java', cat: 'backend' },
  { id: 'csharp', icon: '🔶', label: 'C#', cat: 'backend' },
  { id: 'ruby', icon: '💎', label: 'Ruby', cat: 'backend' },
  { id: 'pytorch', icon: '🔥', label: 'PyTorch', cat: 'ai' },
  { id: 'tensorflow', icon: '🧠', label: 'TensorFlow', cat: 'ai' },
  { id: 'langchain', icon: '⛓️', label: 'LangChain', cat: 'ai' },
  { id: 'openai', icon: '🤖', label: 'OpenAI', cat: 'ai' },
  { id: 'huggingface', icon: '🤗', label: 'Hugging Face', cat: 'ai' },
  { id: 'supabase', icon: '⚡', label: 'Supabase', cat: 'database' },
  { id: 'postgres', icon: '🐘', label: 'PostgreSQL', cat: 'database' },
  { id: 'mongo', icon: '🍃', label: 'MongoDB', cat: 'database' },
  { id: 'firebase', icon: '🔥', label: 'Firebase', cat: 'database' },
  { id: 'redis', icon: '🔴', label: 'Redis', cat: 'database' },
  { id: 'mysql', icon: '🐬', label: 'MySQL', cat: 'database' },
  { id: 'docker', icon: '🐳', label: 'Docker', cat: 'tools' },
  { id: 'git', icon: '🔀', label: 'Git', cat: 'tools' },
  { id: 'vite', icon: '⚡', label: 'Vite', cat: 'tools' },
  { id: 'webpack', icon: '📦', label: 'Webpack', cat: 'tools' },
  { id: 'figma', icon: '🖌️', label: 'Figma', cat: 'tools' },
  { id: 'vercel', icon: '▲', label: 'Vercel', cat: 'tools' },
  { id: 'aws', icon: '☁️', label: 'AWS', cat: 'tools' },
  { id: 'gcp', icon: '🌍', label: 'GCP', cat: 'tools' },
];

const CATEGORIES = [
  { name: 'Frontend', id: 'frontend' },
  { name: 'Backend', id: 'backend' },
  { name: 'IA / ML', id: 'ai' },
  { name: 'Bases de Datos', id: 'database' },
  { name: 'Herramientas', id: 'tools' },
];

const THEMES = [
  { id: 'dark', label: '🌑 Dark', bg: '#0a0a12', text: '#fff' },
  { id: 'purple', label: '💜 Purple', bg: '#1a0533', text: '#fff' },
  { id: 'ocean', label: '🌊 Ocean', bg: '#0c1929', text: '#fff' },
  { id: 'amber', label: '🔥 Amber', bg: '#1a1200', text: '#ffd700' },
  { id: 'midnight', label: '🌙 Midnight', bg: '#050510', text: '#c8d6f0' },
];

const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const name = ref('Tu Nombre');
    const role = ref('Full-Stack Developer');
    const stack = ref([]);
    const search = ref('');
    const theme = ref('dark');
    const toast = ref(null);
    const exporting = ref(false);
    const cardRef = ref(null);

    function showToast(msg, type = 'info') {
      toast.value = { msg, type };
      setTimeout(() => { toast.value = null; }, 2500);
    }

    function isSelected(id) {
      return stack.value.some(t => t.id === id);
    }

    function toggleTech(tech) {
      const idx = stack.value.findIndex(t => t.id === tech.id);
      if (idx > -1) {
        stack.value.splice(idx, 1);
      } else {
        stack.value.push({ ...tech });
      }
    }

    function resetAll() {
      stack.value = [];
      name.value = 'Tu Nombre';
      role.value = 'Full-Stack Developer';
      theme.value = 'dark';
      showToast('Todo reiniciado ✅', 'success');
    }

    const filteredCategories = computed(() => {
      const q = search.value.toLowerCase();
      return CATEGORIES.map(cat => {
        const items = TECHNOLOGIES.filter(t => t.cat === cat.id && (!q || t.label.toLowerCase().includes(q)));
        return { ...cat, items };
      }).filter(cat => cat.items.length > 0);
    });

    async function exportCard() {
      if (!cardRef.value) return;
      exporting.value = true;
      try {
        const canvas = await html2canvas(cardRef.value, {
          backgroundColor: null,
          scale: 3,
          useCORS: true,
        });
        const link = document.createElement('a');
        link.download = `stack-${name.value.replace(/\s+/g, '-').toLowerCase() || 'default'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('✅ PNG exportado!', 'success');
      } catch {
        showToast('Error al exportar 😅', 'error');
      } finally {
        exporting.value = false;
      }
    }

    return { name, role, stack, search, theme, toast, exporting, cardRef, isSelected, toggleTech, resetAll, filteredCategories, exportCard, themes: THEMES };
  }
}).mount('#app');
