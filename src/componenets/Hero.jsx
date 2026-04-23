import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Package, Activity, MapPin, AlertCircle, ShoppingBag, Plus, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    const [revenue, setRevenue] = useState(4280000);
    const [profit, setProfit] = useState(1142000);
    
    // Interactive Dashboard State
    const [items, setItems] = useState([
        { id: 1, type: 'product', title: t('dashboard_top_product'), subtitle: 'SKU: PROD-01', value: '+42% ROI', color: 'emerald' },
        { id: 2, type: 'campaign', title: t('dashboard_bad_campaign'), subtitle: 'FB Ads - Retargeting', value: '-15% ROI', color: 'red' },
        { id: 3, type: 'wilaya', title: t('dashboard_top_wilaya'), subtitle: 'Alger', value: '65% CVR', color: 'blue' }
    ]);

    // Subtle live updates simulation
    useEffect(() => {
        const interval = setInterval(() => {
            const increment = Math.floor(Math.random() * 5000);
            setRevenue(prev => prev + increment);
            setProfit(prev => prev + Math.floor(increment * 0.26)); // Approx 26% margin
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const deleteItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const addItem = () => {
        const newId = Math.max(0, ...items.map(i => i.id)) + 1;
        const types = [
            { type: 'product', title: 'Nouveau Produit', subtitle: 'SKU: NEW-PROD', value: '+30% ROI', color: 'emerald' },
            { type: 'campaign', title: 'Nouvelle Campagne', subtitle: 'Google Ads', value: '+12% ROI', color: 'blue' }
        ];
        const randomType = types[Math.floor(Math.random() * types.length)];
        setItems(prev => [...prev, { ...randomType, id: newId }]);
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
            {/* Background Decor - Blue Gradient Background like RiseManager */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-white dark:from-blue-900/10 dark:via-transparent dark:to-slate-950 pointer-events-none" />
            
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="flex flex-col items-start text-start max-w-2xl mx-auto lg:mx-0">
                        {/* Title */}
                        <h1
                            className="text-5xl lg:text-[64px] font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.1] animate-slide-up tracking-tight"
                            style={{ animationDelay: '0.1s' }}
                            dangerouslySetInnerHTML={{ __html: t('hero_title') }}
                        />

                        {/* Subtitle */}
                        <p
                            className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-xl animate-slide-up font-medium leading-relaxed"
                            style={{ animationDelay: '0.2s' }}
                        >
                            {t('hero_subtitle')}
                        </p>

                        {/* CTAs */}
                        <div
                            className="flex flex-col sm:flex-row items-center gap-4 mb-12 animate-slide-up w-full sm:w-auto"
                            style={{ animationDelay: '0.3s' }}
                        >
                            <Link
                                to="/signup"
                                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                            >
                                {t('cta_trial')}
                            </Link>
                            <Link
                                to="/live"
                                className="w-full sm:w-auto bg-white dark:bg-slate-900 text-primary dark:text-primary border border-slate-100 dark:border-slate-800 px-8 py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 group"
                            >
                                {t('cta_live')} <ArrowRight size={18} className="transition-transform ltr:group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                            </Link>
                        </div>

                        {/* Reassurance */}
                        <div className="flex flex-wrap gap-x-8 gap-y-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                                <CheckCircle size={16} className="text-primary" />
                                <span className="text-xs font-bold uppercase tracking-wider">{t("hero_reassurance_1")}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                                <TrendingUp size={16} className="text-primary" />
                                <span className="text-xs font-bold uppercase tracking-wider">{t("hero_reassurance_2")}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Dashboard */}
                    <div className="relative animate-slide-up" style={{ animationDelay: '0.5s' }}>
                        <div className="relative">
                            {/* Dashboard Container */}
                            <div className="rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 shadow-2xl transition-all duration-700 hover:scale-[1.02] group">
                                {/* Header Bar */}
                                <div className="h-12 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-6">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="flex items-center gap-2 bg-white dark:bg-slate-900 rounded-lg px-4 py-1 text-[10px] font-bold text-slate-400 border border-slate-100 dark:border-slate-700 uppercase tracking-widest">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        {t('real_time_preview')}
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div className="p-6 xs:p-10 space-y-8">
                                    {/* Top Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4 xs:gap-6">
                                        <div className="glass-card p-5 xs:p-6 rounded-3xl relative overflow-hidden group/stat cursor-pointer active:scale-95 transition-all">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/stat:opacity-40 transition-all group-hover/stat:scale-110">
                                                <DollarSign size={40} className="text-primary" />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t('dashboard_ca')}</p>
                                            <h3 className="text-xl xs:text-2xl font-black text-slate-900 dark:text-white tabular-nums tracking-tight">
                                                {revenue.toLocaleString()} <span className="text-xs">DA</span>
                                            </h3>
                                            <div className="mt-4 flex items-center gap-1.5 text-emerald-500 font-bold text-[10px]">
                                                <TrendingUp size={12} /> +12.5%
                                            </div>
                                        </div>

                                        <div className="glass-card p-5 xs:p-6 rounded-3xl relative overflow-hidden group/stat cursor-pointer active:scale-95 transition-all">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/stat:opacity-40 transition-all group-hover/stat:scale-110">
                                                <Activity size={40} className="text-emerald-500" />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{t('dashboard_net_profit')}</p>
                                            <h3 className="text-xl xs:text-2xl font-black text-emerald-600 dark:text-emerald-400 tabular-nums tracking-tight">
                                                {profit.toLocaleString()} <span className="text-xs">DA</span>
                                            </h3>
                                            <div className="mt-4 flex items-center gap-1.5 text-emerald-500 font-bold text-[10px]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> {t("Optimisé")}
                                            </div>
                                        </div>
                                    </div>

                                    {/* List Stats */}
                                    <div className="space-y-3 xs:space-y-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t("Analyses de performance")}</p>
                                            <button 
                                                onClick={addItem}
                                                className="p-1.5 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all active:scale-90"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        
                                        {items.map((item) => (
                                            <div 
                                                key={item.id} 
                                                className={`flex items-center justify-between p-3 xs:p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800 hover:border-${item.color}-500/20 hover:shadow-xl group/row cursor-pointer`}
                                            >
                                                <div className="flex items-center gap-3 xs:gap-4">
                                                    <div className={`w-9 h-9 xs:w-10 xs:h-10 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/30 flex items-center justify-center text-${item.color}-600 transition-transform group-hover/row:scale-110`}>
                                                        {item.type === 'product' && <Package size={20} />}
                                                        {item.type === 'campaign' && <AlertCircle size={20} />}
                                                        {item.type === 'wilaya' && <MapPin size={20} />}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-xs font-black text-slate-900 dark:text-white truncate">{item.title}</p>
                                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.subtitle}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="text-right shrink-0">
                                                        <p className={`text-xs font-black text-${item.color}-500`}>{item.value}</p>
                                                    </div>
                                                    <button 
                                                        onClick={(e) => { e.stopPropagation(); deleteItem(item.id); }}
                                                        className="opacity-0 group-hover/row:opacity-100 p-2 text-slate-400 hover:text-red-500 transition-all"
                                                    >
                                                        <Trash2 size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
