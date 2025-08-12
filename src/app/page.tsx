import { Button } from "../../components/ui/button"
import { Card } from "../../components/ui/card"
import { ThemeToggle } from "../../components/theme-toggle"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg-main relative">
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90 backdrop-blur-sm"></div>
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-b-3xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-black bg-gradient-to-r from-[#67023D] via-[#C60C31] to-[#512888] bg-clip-text text-transparent">
                  Ignacio Arce
                </h1>
              </div>

              <nav className="hidden md:flex items-center space-x-8">
                {["Projects", "Skills", "Photography", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors duration-200 hover:scale-105 transform rounded-full px-3 py-1 hover:bg-accent/50"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight">
                Building Beautiful{" "}
                <span className="bg-gradient-to-r from-[#67023D] via-[#F61115] to-[#9A54B3] bg-clip-text text-transparent">
                  Experiences
                </span>
                <br />
                One Pixel at a Time
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-semibold">
                I'm a passionate designer and developer who crafts digital experiences that blend aesthetic beauty with
                functional excellence. From concept to code, I bring ideas to life with attention to every detail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#67023D] to-[#C60C31] hover:from-[#512888] hover:to-[#F61115] text-white border-0 rounded-3xl px-8 py-3 text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-3xl px-8 py-3 text-base font-bold border-2 hover:bg-muted/50 transition-all duration-300 hover:scale-105 bg-transparent border-[#512888] hover:border-[#9A54B3] text-[#512888] hover:text-[#9A54B3] dark:border-[#9A54B3] dark:text-[#9A54B3] dark:hover:border-[#C60C31] dark:hover:text-[#C60C31]"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </main>

        {/* Featured Work Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-black mb-4">Featured Work</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto font-semibold">
              A selection of recent projects and photography that showcase my creative vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "E-commerce Platform",
                type: "Web Development",
                gradient: "from-[#67023D] to-[#C60C31]",
              },
              {
                title: "Brand Identity System",
                type: "Design",
                gradient: "from-[#C60C31] to-[#F61115]",
              },
              {
                title: "Urban Photography Series",
                type: "Photography",
                gradient: "from-[#512888] to-[#9A54B3]",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-card to-muted/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg backdrop-blur-sm"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 dark:bg-black/40 dark:group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-bold opacity-90">{project.type}</p>
                    <h4 className="text-lg font-black">{project.title}</h4>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/40 bg-muted/20 dark:bg-muted/30 rounded-t-3xl backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-muted-foreground font-semibold">© 2025 Ignacio Arce. All rights reserved.</p>

              <div className="flex items-center space-x-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "#", label: "Email" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-full bg-muted hover:bg-gradient-to-r hover:from-[#512888] hover:to-[#9A54B3] hover:text-white dark:bg-muted/50 dark:hover:from-[#9A54B3] dark:hover:to-[#C60C31] transition-all duration-200 hover:scale-110 transform shadow-md"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
