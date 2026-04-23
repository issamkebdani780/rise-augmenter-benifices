import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, TrendingDown, EyeOff, Brain } from 'lucide-react';

const Verite = () => {
    const { t } = useTranslation();

    const truths = [
        {
            id: 1,
            title: t('verite_1_title'),
            desc: t('verite_1_desc'),
            icon: <Target className="w-8 h-8 text-primary" />,
            delay: '0.1s'
        },
        {
            id: 2,
            title: t('verite_2_title'),
            desc: t('verite_2_desc'),
            icon: <TrendingDown className="w-8 h-8 text-red-500" />,
            delay: '0.2s'
        },
        {
            id: 3,
            title: t('verite_3_title'),
            desc: t('verite_3_desc'),
            icon: <EyeOff className="w-8 h-8 text-amber-500" />,
            delay: '0.3s'
        },
        {
            id: 4,
            title: t('verite_4_title'),
            desc: t('verite_4_desc'),
            icon: <Brain className="w-8 h-8 text-blue-500" />,
            delay: '0.4s'
        }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500 overflow-hidden relative" id="profit">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 
                        className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight animate-slide-up"
                        dangerouslySetInnerHTML={{ __html: t('verite_title') }}
                    />
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full animate-slide-up" style={{ animationDelay: '0.2s' }} />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {truths.map((item) => (
                        <div 
                            key={item.id}
                            className="bg-white dark:bg-slate-900 p-8 rounded-[32px] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-black/20 hover:scale-[1.05] transition-all duration-300 animate-slide-up group"
                            style={{ animationDelay: item.delay }}
                        >
                            <div className="mb-6 w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 leading-snug">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Verite;
