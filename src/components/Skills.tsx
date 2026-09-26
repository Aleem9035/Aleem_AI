import { useState, useMemo } from 'react';
import { skillsCategories } from '../data/portfolioData';
import { Search, Brain, Sparkles, Eye, Server, Database, Cloud } from 'lucide-react';

export function Skills() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, typeof Brain> = {
    'Machine Learning': Brain,
    'Generative AI': Sparkles,
    'Computer Vision': Eye,
    Backend: Server,
    Data: Database,
    'Cloud & DevOps': Cloud,
  };

  const filteredCategories = useMemo(() => {
    return skillsCategories
      .filter((cat) => selectedCategory === 'all' || cat.category === selectedCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase();
        const matchesCategory = cat.category.toLowerCase().includes(q);
        const filteredSkills = cat.skills.filter((skill) =>
          skill.toLowerCase().includes(q)
        );
        if (matchesCategory || filteredSkills.length > 0) {
          return {
            ...cat,
            skills: matchesCategory ? cat.skills : filteredSkills,
          };
        }
        return null;
      })
      .filter(Boolean) as typeof skillsCategories;
  }, [searchQuery, selectedCategory]);

  return (
    <section id="skills" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-2">
              Technical Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Skills & Technologies
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Categorized by engineering disciplines. No arbitrary percentages or vanity indicators—strictly production tools, libraries, and frameworks I use to build systems.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill or tool (e.g. YOLO, RAG)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-900/80 border border-slate-800 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Buttons (Functional Segmented Control) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-thin">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Skills
          </button>
          {skillsCategories.map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.category
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.category] || Brain;
            return (
              <div
                key={cat.category}
                className="rounded-xl bg-slate-900/50 border border-slate-800/80 p-5 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-900/40 text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{cat.category}</h3>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills items as clean unboxed typography with dot separators or refined tags */}
                  <div className="mt-4 pt-3 border-t border-slate-800/60">
                    <ul className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <li
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700/50 text-slate-200 hover:text-white hover:border-blue-500/40 transition-colors font-mono"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-2.5 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-slate-600">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 rounded-xl bg-slate-900/30 border border-slate-800">
            <p className="text-sm text-slate-400">
              No skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-blue-400 hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
