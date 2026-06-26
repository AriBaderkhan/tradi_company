import { useState, useEffect, useCallback } from 'react';
import { Check, ArrowRight, Loader2, RefreshCw, Sparkles } from 'lucide-react';
import { FadeIn, FadeInStagger } from '../ui/FadeIn';

// Live data + outbound links for our dental clinic SaaS.
// This site only DISPLAYS pricing and LINKS to the app's self-service signup.
const API_DOMAIN = 'https://clinic-system-backend.onrender.com';
const APP_DOMAIN = 'https://clinic-system-frontend-mu.vercel.app';

const PLANS_ENDPOINT = `${API_DOMAIN}/api/plans/public`;
const registerUrl = (plan) => `${APP_DOMAIN}/register?plan=${encodeURIComponent(plan.id ?? plan.name)}`;

const formatLimit = (value) => (value === -1 || value === null || value === undefined ? 'Unlimited' : value);

const Pricing = () => {
    const [plans, setPlans] = useState([]);
    const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'

    const loadPlans = useCallback(async () => {
        setStatus('loading');
        try {
            const res = await fetch(PLANS_ENDPOINT);
            if (!res.ok) throw new Error(`Request failed (${res.status})`);

            const json = await res.json();
            // API always wraps the payload: { ok: true, data: [...] }
            const list = Array.isArray(json?.data) ? json.data : [];

            const sorted = [...list].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
            setPlans(sorted);
            setStatus('success');
        } catch (err) {
            console.error('Failed to load pricing plans:', err);
            setStatus('error');
        }
    }, []);

    useEffect(() => {
        loadPlans();
    }, [loadPlans]);

    // The highest-priced plan is highlighted as "Most popular".
    const popularId = plans.length ? plans[plans.length - 1].id : null;

    return (
        <section id="pricing" className="container mx-auto px-4 md:px-6 py-16 md:py-24 scroll-mt-24">
            <FadeIn isActiveOnScroll>
                <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-400 mb-6 w-fit">
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        Clinic System Plans
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Simple, transparent pricing
                    </h2>
                    <p className="text-base sm:text-lg text-secondary leading-relaxed">
                        Pick the plan that fits your practice. Upgrade, downgrade, or cancel anytime
                        from your dashboard.
                    </p>
                </div>
            </FadeIn>

            {status === 'loading' && <PricingSkeleton />}

            {status === 'error' && <PricingFallback onRetry={loadPlans} />}

            {status === 'success' && plans.length === 0 && <PricingFallback onRetry={loadPlans} empty />}

            {status === 'success' && plans.length > 0 && (
                <FadeInStagger
                    isActiveOnScroll
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch"
                >
                    {plans.map((plan) => (
                        <PlanCard key={plan.id ?? plan.name} plan={plan} popular={plan.id === popularId} />
                    ))}
                </FadeInStagger>
            )}
        </section>
    );
};

const PlanCard = ({ plan, popular }) => {
    const features = Array.isArray(plan.features) ? plan.features : [];

    return (
        <FadeIn
            className={`relative flex flex-col h-full p-6 sm:p-8 rounded-2xl transition-colors ${popular
                ? 'bg-card border border-primary/40 shadow-2xl shadow-primary/10 ring-1 ring-primary/20'
                : 'bg-card border border-white/5 hover:border-white/10'
                }`}
        >
            {popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold shadow-lg whitespace-nowrap">
                        <Sparkles className="w-3 h-3" />
                        Most popular
                    </span>
                </div>
            )}

            {/* Plan name */}
            <h3 className="text-lg sm:text-xl font-semibold mb-1">{plan.name}</h3>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-1 mt-3">
                <span className="text-4xl sm:text-5xl font-bold tracking-tight">${plan.price}</span>
                <span className="text-secondary text-sm sm:text-base">/ month</span>
            </div>

            {/* Limits — small print */}
            <p className="text-xs sm:text-sm text-secondary mb-6">
                {formatLimit(plan.max_branches)} {plan.max_branches === 1 ? 'branch' : 'branches'}
                {' · '}
                {formatLimit(plan.max_users)} users
            </p>

            <a href={registerUrl(plan)} className="block">
                <button
                    className={`group w-full px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm sm:text-base ${popular
                        ? 'bg-primary hover:bg-primary/90 text-white'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                        }`}
                >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </a>

            {/* Features checklist */}
            {features.length > 0 && (
                <ul className="mt-8 space-y-3 border-t border-white/5 pt-6">
                    {features.map((feature, i) => (
                        <li key={feature.code ?? i} className="flex items-start gap-3 text-sm sm:text-base">
                            <span className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary/10">
                                <Check className="w-3.5 h-3.5 text-primary" />
                            </span>
                            <span className="text-gray-300 leading-relaxed">{feature.name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </FadeIn>
    );
};

const PricingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {[0, 1, 2].map((i) => (
            <div
                key={i}
                className="flex flex-col h-full p-6 sm:p-8 rounded-2xl bg-card border border-white/5 animate-pulse"
            >
                <div className="h-5 w-24 rounded bg-white/10 mb-4" />
                <div className="h-10 w-32 rounded bg-white/10 mb-3" />
                <div className="h-3 w-40 rounded bg-white/5 mb-6" />
                <div className="h-11 w-full rounded-lg bg-white/10 mb-8" />
                <div className="space-y-3 border-t border-white/5 pt-6">
                    {[0, 1, 2, 3].map((j) => (
                        <div key={j} className="h-4 w-full rounded bg-white/5" />
                    ))}
                </div>
            </div>
        ))}
    </div>
);

const PricingFallback = ({ onRetry, empty = false }) => (
    <FadeIn isActiveOnScroll>
        <div className="max-w-md mx-auto text-center p-8 sm:p-10 rounded-2xl bg-card border border-white/5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-5">
                <Loader2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {empty ? 'Pricing coming soon' : "We couldn't load pricing"}
            </h3>
            <p className="text-secondary text-sm sm:text-base mb-6">
                {empty
                    ? 'Our plans are being finalized. Please check back shortly.'
                    : 'Something went wrong while fetching our plans. Please try again.'}
            </p>
            <button
                onClick={onRetry}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-all text-sm sm:text-base"
            >
                <RefreshCw className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                Retry
            </button>
        </div>
    </FadeIn>
);

export default Pricing;
