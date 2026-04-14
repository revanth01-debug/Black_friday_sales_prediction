import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Database, Settings, BarChart3, Wrench, Brain, 
  CheckCircle, Rocket, ChevronRight, BookOpen, TrendingUp,
  Users, ShoppingCart, Sparkles
} from 'lucide-react';
import { Button } from './src/react-app/components/ui/button';
import { Card } from './src/react-app/components/ui/card';
import { Badge } from './src/react-app/components/ui/badge';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target, Database, Settings, BarChart3, Wrench, Brain, CheckCircle, Rocket
};

export default function HomePage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        
        <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">ML Sales Predictor</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge className="bg-white/10 text-white border-0 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              For Students
            </Badge>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-8 pt-16 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-200 text-sm mb-8">
              <BookOpen className="w-4 h-4" />
              Interactive Machine Learning Course
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Black Friday Sales
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Prediction Model
              </span>
            </h1>
            
            <p className="text-xl text-purple-200/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Learn how to build a machine learning model to predict customer purchase amounts 
              during Black Friday sales using real-world data science techniques.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/predictor">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-purple-500/25">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
              </Link>
              <Link to="/eda">
                <Button className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm">
                  View Dataset
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { label: 'Sample Records', value: '550K+', icon: Database },
              { label: 'Features', value: '12', icon: Settings },
              { label: 'ML Models', value: '5', icon: Brain },
              { label: 'Best R² Score', value: '0.87', icon: Target },
            ].map((stat) => (
              <div 
                key={stat.label} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-purple-200/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ML Pipeline Section removed due to missing data and errors */}

      {/* Learning Modules Preview */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 mb-4">
              Course Modules
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              What You'll Learn
            </h2>
            <p className="text-purple-200/60 max-w-2xl mx-auto">
              Master essential data science concepts through hands-on examples
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Exploratory Data Analysis',
                description: 'Visualize sales patterns across customer demographics including age, gender, city type, and product categories.',
                icon: BarChart3,
                color: 'from-blue-500 to-cyan-500',
                link: '/eda',
              },
              {
                title: 'Feature Engineering',
                description: 'Learn techniques to create meaningful features that improve model accuracy and predictive power.',
                icon: Wrench,
                color: 'from-purple-500 to-pink-500',
                link: '/eda',
              },
              {
                title: 'Model Comparison',
                description: 'Compare regression algorithms and understand when to use each based on performance metrics.',
                icon: Brain,
                color: 'from-orange-500 to-red-500',
                link: '/eda',
              },
            ].map((module) => (
              <Link key={module.title} to={module.link}>
                <Card 
                  className="bg-white/5 border-0 overflow-hidden group hover:bg-white/10 transition-all duration-300 h-full"
                >
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${module.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <module.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {module.title}
                    </h3>
                    <p className="text-purple-200/60 leading-relaxed">
                      {module.description}
                    </p>
                    <Button 
                      className="ghost mt-6 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0"
                    >
                      Explore Module
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 px-8 bg-gradient-to-b from-transparent to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mb-4">
                  Real-World Applications
                </Badge>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why This Matters
                </h2>
                <p className="text-purple-200/70 mb-8 leading-relaxed">
                  Understanding sales prediction models helps businesses make data-driven decisions 
                  that directly impact revenue and customer satisfaction.
                </p>
                <div className="space-y-4">
                  {[
                    { title: 'Sales Forecasting', desc: 'Predict revenue and plan resources accordingly' },
                    { title: 'Inventory Management', desc: 'Optimize stock levels based on expected demand' },
                    { title: 'Targeted Marketing', desc: 'Personalize offers to high-value customer segments' },
                    { title: 'Pricing Strategy', desc: 'Set optimal prices for maximum conversion' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="p-1 bg-green-500/20 rounded-full mt-1">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <div className="font-medium text-white">{item.title}</div>
                        <div className="text-sm text-purple-200/50">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30" />
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Users className="w-10 h-10 text-purple-400" />
                      <div>
                        <div className="text-2xl font-bold text-white">$12,450</div>
                        <div className="text-sm text-purple-200/60">Avg. Predicted Purchase</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-200/60">Model Confidence</span>
                        <span className="text-green-400 font-medium">87%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
              <ShoppingCart className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">ML Sales Predictor</span>
          </div>
          <p className="text-purple-200/40 text-sm">
            An educational platform for learning machine learning through practical examples
          </p>
        </div>
      </footer>
    </div>
  );
}
