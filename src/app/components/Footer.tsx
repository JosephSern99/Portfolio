export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950 text-white py-10 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; 2021 &ndash; {new Date().getFullYear()} Joseph Khoo. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 mt-1">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}

