import Link from "next/link"
import { ChefHat } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors"
          >
            <ChefHat className="h-8 w-8" />
            <span className="text-xl font-bold">Smart Recipe Generator</span>
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
