import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Package, Activity, MapPin, AlertCircle, ShoppingBag, Plus, Trash2, ShoppingCart, Rocket, PlayCircle, ShieldCheck, Zap } from 'lucide-react';
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
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden transition-colors duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-blue-500/5 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Column: Content */}
                    <div className="flex-1 text-center lg:text-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6">
                            <Zap className="w-3 h-3 fill-current" />
                            NOUVELLE VERSION 2.0
                        </div>
                        {/* Title */}
                        <h1
                            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 text-slate-900 dark:text-white animate-slide-up"
                            style={{ animationDelay: '0.1s' }}
                            dangerouslySetInnerHTML={{ __html: t('hero_title') }}
                        />

                        {/* Subtitle */}
                        <p
                            className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-slate-600 dark:text-slate-400 animate-slide-up"
                            style={{ animationDelay: '0.2s' }}
                        >
                            {t('hero_subtitle')}
                        </p>

                        {/* CTAs */}
                        <div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 animate-slide-up"
                            style={{ animationDelay: '0.3s' }}
                        >
                            <Link
                                to="/signup"
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:scale-105 transition-all"
                            >
                                <Rocket className="w-5 h-5" />
                                {t('cta_trial')}
                            </Link>
                            <Link
                                to="/live"
                                className="w-full sm:w-auto px-8 py-4 border rounded-2xl flex items-center justify-center gap-2 transition-all font-bold bg-white border-slate-200 text-slate-900 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-white dark:hover:bg-slate-800"
                            >
                                <PlayCircle className="w-5 h-5 text-primary" />
                                {t('cta_live')}
                            </Link>
                        </div>

                        {/* Reassurance */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-400 dark:text-slate-500 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-center gap-2 group cursor-help">
                                <ShieldCheck className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">{t('hero_reassurance_1')}</span>
                            </div>
                            <div className="flex items-center gap-2 group cursor-help">
                                <Zap className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">{t('hero_reassurance_2')}</span>
                            </div>
                        </div>
                    </div>

                        <div className="flex-1 w-full relative pt-8 lg:pt-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                            <div className="relative">
                                {/* Dashboard Container */}
                                <div className="border rounded-[32px] overflow-hidden shadow-2xl relative transition-all duration-500 hover:shadow-primary/10 group/card bg-white border-slate-100 shadow-slate-200/50 dark:bg-slate-900 dark:border-slate-800 dark:shadow-black/50">
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
                                        <div className="border p-5 xs:p-6 rounded-2xl relative overflow-hidden group/stat cursor-pointer active:scale-95 transition-colors bg-slate-50 border-slate-100 hover:bg-slate-200/50 dark:bg-slate-950 dark:border-slate-800 dark:hover:bg-slate-800/50">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/stat:opacity-40 transition-all group-hover/stat:scale-110">
                                                <DollarSign size={40} className="text-primary" />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">{t('dashboard_ca')}</p>
                                            <h3 className="text-xl xs:text-2xl font-black text-primary tracking-tight">
                                                {revenue.toLocaleString()} <span className="text-xs">DA</span>
                                            </h3>
                                            <div className="mt-4 flex items-center gap-1.5 text-emerald-500 font-bold text-[10px]">
                                                <TrendingUp size={12} /> +12.5%
                                            </div>
                                        </div>

                                        <div className="border p-5 xs:p-6 rounded-2xl relative overflow-hidden group/stat cursor-pointer active:scale-95 transition-colors bg-slate-50 border-slate-100 hover:bg-slate-200/50 dark:bg-slate-950 dark:border-slate-800 dark:hover:bg-slate-800/50">
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/stat:opacity-40 transition-all group-hover/stat:scale-110">
                                                <Activity size={40} className="text-emerald-500" />
                                            </div>
                                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">{t('dashboard_net_profit')}</p>
                                            <h3 className="text-xl xs:text-2xl font-black text-emerald-500 tracking-tight">
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
                                                className={`flex items-center justify-between p-3 xs:p-4 rounded-2xl border transition-colors bg-slate-50 border-slate-100 hover:bg-slate-200/50 dark:bg-slate-950 dark:border-slate-800 dark:hover:bg-slate-800/50 group/row cursor-pointer`}
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
                            
                            {/* Floating Element */}
                            <div className="absolute -right-8 top-1/4 animate-float hidden lg:block z-20 p-4 rounded-2xl shadow-2xl border cursor-pointer transition-shadow hover:shadow-primary/30 bg-white border-slate-100 text-slate-900 shadow-slate-200/50 dark:bg-primary dark:border-white/20 dark:text-white dark:shadow-primary/40">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-500">
                                        <ShoppingCart size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-slate-900 dark:text-white">Nouvelle Commande</p>
                                        <p className="text-[10px] text-slate-400 dark:text-white/70 font-bold">Il y a 2 min • Alger</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
