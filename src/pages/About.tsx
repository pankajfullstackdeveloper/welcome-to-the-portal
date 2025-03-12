
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAppSelector } from "@/hooks/useRedux";

const About = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Sarah Smith",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Michael Brown",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">ShopEase</Link>
          <div className="flex gap-4 items-center">
            <Button asChild variant="ghost">
              <Link to="/about">About</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/deals">Deals</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/cart">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Cart ({cartItems.length})
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">About ShopEase</h1>
          <p className="text-lg text-blue-700 mb-2">Founded in 2020, ShopEase has become a leading online retailer dedicated to providing quality products at affordable prices.</p>
          <p className="text-lg text-blue-700">Our mission is to make shopping easy, enjoyable, and accessible to everyone.</p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-blue-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality</h3>
                <p className="text-gray-600">We're committed to offering only the highest quality products to our customers.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-green-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                <p className="text-gray-600">We strive to minimize our environmental impact through sustainable practices.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-purple-100 p-4 rounded-full inline-flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                <p className="text-gray-600">Our customers are at the heart of everything we do, driving our decisions and actions.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <div className="h-48 bg-gray-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white p-6">
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>info@shopease.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span>123 Commerce St, Business City, 10001</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Monday - Friday: 9AM - 5PM EST</span>
                </div>
              </div>
            </Card>
            
            <Card className="bg-white p-6">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <p className="mb-6 text-gray-600">Follow us on social media for updates, promotions, and more!</p>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-500">Facebook</Button>
                <Button className="bg-sky-500 hover:bg-sky-400">Twitter</Button>
                <Button className="bg-pink-600 hover:bg-pink-500">Instagram</Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
