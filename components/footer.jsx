import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-orange-100 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p className="flex items-center justify-center space-x-1">
            <span>© 2024 Smart Recipe Generator. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for food lovers everywhere.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
