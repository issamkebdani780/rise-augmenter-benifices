import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    Zap, 
    TrendingUp, 
    TrendingDown, 
    Rocket, 
    Users, 
    MapPin
} from 'lucide-react';

const DecisionRapide = () => {
    const { t } = useTranslation();

    const decisions = [
        { id: 1, key: 'dec_1', icon: <TrendingUp className="text-emerald-500" /> },
        { id: 2, key: 'dec_2', icon: <TrendingDown className="text-red-500" /> },
        { id: 3, key: 'dec_3', icon: <Rocket className="text-primary" /> },
        { id: 4, key: 'dec_4', icon: <Users className="text-blue-500" /> },
        { id: 5, key: 'dec_5', icon: <MapPin className="text-amber-500" /> }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-500 overflow-hidden relative" id="decisions">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-8 animate-slide-up">
                            <Zap size={16} />
                            <span className="text-xs font-black uppercase tracking-widest">{t('decision_badge_rapid')}</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 animate-slide-up">
                            {t('dec_title')}
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 max-w-2xl mx-auto">
                        {decisions.map((dec, index) => (
                            <div 
                                key={dec.id}
                                className="flex items-center gap-6 p-5 bg-white dark:bg-slate-900 rounded-[24px] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-black/20 hover:scale-[1.02] transition-all duration-300 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shadow-inner">
                                    {dec.icon}
                                </div>
                                <p className="text-lg font-bold text-slate-800 dark:text-slate-200">
                                    {t(dec.key)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DecisionRapide;
