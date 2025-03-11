
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-slate-900">Welcome to Your App</h1>
        <p className="text-xl text-slate-600 max-w-md mx-auto">
          Get started by creating an account or signing in to access all features.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-500">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
