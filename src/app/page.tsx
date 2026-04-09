import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import GitHubProjects from './components/Github-Projects'
import BackToTop from './components/BackToTop'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <About />
        <Education />
        <Skills />
        <GitHubProjects />
        <Experience />
        <Certificates />
      </div>
      <Footer />
      <BackToTop />
    </main>
  )
}
