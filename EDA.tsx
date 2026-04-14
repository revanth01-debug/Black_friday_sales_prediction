import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend, RadarChart, Radar,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  ArrowLeft, BarChart3, TrendingUp, Users, 
  MapPin, ShoppingBag, Info, Lightbulb
} from 'lucide-react';
import { Button } from './src/react-app/components/ui/button';
import { Card } from './src/react-app/components/ui/card';
import { Badge } from './src/react-app/components/ui/badge';
import { 
  purchaseByGender, purchaseByAge, purchaseByCity, purchaseByCategory
} from './src/react-app/data/blackFridayData';

const COLORS = ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#10b981', '#f43f5e', '#6366f1'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-white/20 rounded-lg p-3 shadow-xl">
        <p className="text-white font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-purple-200 text-sm">
            {entry.name}: ${entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function EDAPage() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab');
  const [activeChart, setActiveChart] = useState(
    initialTab === 'age' || initialTab === 'city' || initialTab === 'category' ? initialTab : 'gender'
  );

  const insights = {
    gender: {
      title: 'Gender Analysis',
      finding: 'Male customers show slightly higher average purchase amounts ($9,875) compared to female customers ($8,320).',
      recommendation: 'Consider gender-specific marketing campaigns, but note the difference is relatively small (15%).',
    },
    age: {
      title: 'Age Distribution',
      finding: 'Customers aged 51-55 have the highest average purchase ($18,340), followed by 55+ ($16,890).',
      recommendation: 'Older demographics show higher spending power. Consider premium product recommendations for this segment.',
    },
    city: {
      title: 'City Analysis',
      finding: 'City C customers spend significantly more ($15,930) than City A ($8,348) and City B ($9,230).',
      recommendation: 'Investigate why City C has higher spending—could indicate different demographics or product availability.',
    },
    category: {
      title: 'Product Categories',
      finding: 'Category 1 products have the highest average purchase value ($15,810), suggesting premium items.',
      recommendation: 'Focus inventory and marketing on high-value categories during Black Friday.',
    },
  };

  const chartHighlights = {
    gender: [
      { label: 'Top Segment', value: 'Male', note: 'Highest purchase frequency' },
      { label: 'Spend Gap', value: '15%', note: 'Male vs Female average' },
      { label: 'Key Action', value: 'Target female offers', note: 'Boost lower spend segment' },
    ],
    age: [
      { label: 'Highest Spenders', value: '51-55', note: 'Strong purchase power' },
      { label: 'Emerging Group', value: '36-45', note: 'High-volume buyers' },
      { label: 'Recommendation', value: 'Premium bundles', note: 'Best for older segments' },
    ],
    city: [
      { label: 'Top City', value: 'City C', note: 'Highest avg purchase' },
      { label: 'Lowest City', value: 'City A', note: 'Needs localized campaigns' },
      { label: 'Opportunity', value: 'City B', note: 'Stable growth potential' },
    ],
    category: [
      { label: 'Top Category', value: 'Category 1', note: 'Premium products' },
      { label: 'Middle Range', value: 'Category 3', note: 'Large volume' },
      { label: 'Focus', value: 'Seasonal offers', note: 'Drive Black Friday demand' },
    ],
  };

  const currentInsight = insights[activeChart as keyof typeof insights];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button className="text-purple-200 hover:text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="font-semibold text-white">Exploratory Data Analysis</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="mb-12 rounded-3xl bg-white/5 border border-white/10 p-10">
          <div className="max-w-4xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">Sales Pattern Analysis</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Explore Black Friday purchase trends with an interactive dataset view.
            </h1>
            <p className="text-purple-200/70 max-w-3xl leading-relaxed">
              Use the View Data page to switch between gender, age, city, and category analyses. The dashboard updates with charts, insights, and focused metrics for the selected segment.
            </p>
          </div>
        </div>

        {/* Chart Tabs */}
        <div className="space-y-8">
          <div className="bg-white/5 border border-white/10 p-1 rounded-xl inline-flex gap-2">
            <button
              type="button"
              onClick={() => setActiveChart('gender')}
              className={`${activeChart === 'gender' ? 'bg-purple-500 text-white' : 'text-purple-200'} rounded-lg px-6 py-2`}
            >
              <Users className="w-4 h-4 mr-2 inline" />
              By Gender
            </button>
            <button
              type="button"
              onClick={() => setActiveChart('age')}
              className={`${activeChart === 'age' ? 'bg-purple-500 text-white' : 'text-purple-200'} rounded-lg px-6 py-2`}
            >
              <TrendingUp className="w-4 h-4 mr-2 inline" />
              By Age
            </button>
            <button
              type="button"
              onClick={() => setActiveChart('city')}
              className={`${activeChart === 'city' ? 'bg-purple-500 text-white' : 'text-purple-200'} rounded-lg px-6 py-2`}
            >
              <MapPin className="w-4 h-4 mr-2 inline" />
              By City
            </button>
            <button
              type="button"
              onClick={() => setActiveChart('category')}
              className={`${activeChart === 'category' ? 'bg-purple-500 text-white' : 'text-purple-200'} rounded-lg px-6 py-2`}
            >
              <ShoppingBag className="w-4 h-4 mr-2 inline" />
              By Category
            </button>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 p-4 rounded-3xl bg-slate-950/80 border border-white/10">
            {chartHighlights[activeChart as keyof typeof chartHighlights].map((item) => (
              <div key={item.label} className="rounded-3xl bg-white/5 p-5 border border-white/10">
                <div className="text-xs uppercase tracking-[0.3em] text-purple-300 mb-3">{item.label}</div>
                <div className="text-2xl font-semibold text-white">{item.value}</div>
                <div className="mt-2 text-sm text-purple-200/70">{item.note}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Chart */}
            <Card className="lg:col-span-2 bg-white/5 border-white/10 p-6">
              {activeChart === 'gender' && (
                <div className="mt-0">
                  <h3 className="text-xl font-semibold text-white mb-6">Purchase Amount by Gender</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={purchaseByGender}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                          <XAxis dataKey="gender" stroke="#a78bfa" />
                          <YAxis stroke="#a78bfa" tickFormatter={(v: number) => `$${(v/1000).toFixed(0)}k`} />
                          <Tooltip content={<CustomTooltip />} />
                          <Bar dataKey="avgPurchase" name="Avg Purchase" radius={[8, 8, 0, 0]}>
                            {purchaseByGender.map((_: any, index: number) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={purchaseByGender}
                            dataKey="count"
                            nameKey="gender"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label={(props: any) => `${props.name ?? ''} ${(props.percent ? props.percent * 100 : 0).toFixed(0)}%`}
                          >
                            {purchaseByGender.map((_: any, index: number) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              )}

              {activeChart === 'age' && (
                <div className="mt-0">
                  <h3 className="text-xl font-semibold text-white mb-6">Purchase Amount by Age Group</h3>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={purchaseByAge} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis type="number" stroke="#a78bfa" tickFormatter={(v: number) => `$${(v/1000).toFixed(0)}k`} />
                        <YAxis type="category" dataKey="age" stroke="#a78bfa" width={80} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="avgPurchase" name="Avg Purchase" radius={[0, 8, 8, 0]}>
                          {purchaseByAge.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {activeChart === 'city' && (
                <div className="mt-0">
                  <h3 className="text-xl font-semibold text-white mb-6">Purchase Amount by City Category</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={purchaseByCity}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                          <XAxis dataKey="city" stroke="#a78bfa" />
                          <YAxis stroke="#a78bfa" tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} />
                          <Tooltip content={<CustomTooltip />} />
                          <Bar dataKey="avgPurchase" name="Avg Purchase" radius={[8, 8, 0, 0]}>
                            {purchaseByCity.map((_, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index + 2]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={purchaseByCity}>
                          <PolarGrid stroke="rgba(255,255,255,0.2)" />
                          <PolarAngleAxis dataKey="city" stroke="#a78bfa" />
                          <PolarRadiusAxis stroke="#a78bfa" />
                          <Radar 
                            name="Avg Purchase" 
                            dataKey="avgPurchase" 
                            stroke="#8b5cf6" 
                            fill="#8b5cf6" 
                            fillOpacity={0.5} 
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              )}

              {activeChart === 'category' && (
                <div className="mt-0">
                  <h3 className="text-xl font-semibold text-white mb-6">Purchase Amount by Product Category</h3>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={purchaseByCategory}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="category" stroke="#a78bfa" />
                        <YAxis stroke="#a78bfa" tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`} />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="avgPurchase" name="Avg Purchase" radius={[8, 8, 0, 0]}>
                          {purchaseByCategory.map((_, index: number) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </Card>

            {/* Insights Panel */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  <h3 className="font-semibold text-white">Key Insight</h3>
                </div>
                <h4 className="text-lg font-medium text-purple-200 mb-3">
                  {currentInsight.title}
                </h4>
                <p className="text-purple-200/70 text-sm leading-relaxed mb-4">
                  {currentInsight.finding}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-purple-300/60 uppercase tracking-wide mb-2">
                    Recommendation
                  </p>
                  <p className="text-sm text-purple-200/80">
                    {currentInsight.recommendation}
                  </p>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold text-white">EDA Tips</h3>
                </div>
                <ul className="space-y-3 text-sm text-purple-200/70">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Look for outliers that might skew model predictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Check for correlations between features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Identify which features have the most variance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Consider data distributions for preprocessing</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white/5 border-white/10 p-6">
                <h3 className="font-semibold text-white mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200/60 text-sm">Total Samples</span>
                    <span className="text-white font-medium">550,068</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200/60 text-sm">Avg Purchase</span>
                    <span className="text-white font-medium">$9,264</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200/60 text-sm">Median Purchase</span>
                    <span className="text-white font-medium">$8,047</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200/60 text-sm">Std Deviation</span>
                    <span className="text-white font-medium">$5,023</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
          <Link to="/">
            <Button className="text-purple-200 hover:text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Overview
            </Button>
          </Link>
          <Link to="/feature-engineering">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
              Next: Data Preprocessing
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}