import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Hunter System Error Caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 text-slate-100 p-6">
          <div className="max-w-md w-full p-6 sm:p-8 rounded-2xl border border-rose-500/30 bg-slate-900/90 backdrop-blur-xl shadow-2xl text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400 animate-pulse">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-mono tracking-widest text-rose-400 uppercase font-bold mb-1">
                [SYSTEM RECOVERY PROTOCOL]
              </div>
              <h2 className="text-xl font-black text-slate-100">
                Temporary Mana Disturbance
              </h2>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                A component encounter caused a transient error. The system auto-recovery mechanism is standing by.
              </p>
            </div>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs font-bold tracking-wider hover:brightness-110 shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
              RELOAD SYSTEM
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
