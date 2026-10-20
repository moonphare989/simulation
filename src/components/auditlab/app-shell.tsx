'use client'

import { useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { useAppStore } from '@/lib/store'
import type { SectionId } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import {
  Home,
  GraduationCap,
  BookMarked,
  MessagesSquare,
  FolderSearch,
  HelpCircle,
  Table2,
  Mic,
  TrendingUp,
  Briefcase,
  Landmark,
  Settings,
  Menu,
  Search,
  Sun,
  Moon,
  ShieldCheck,
  Loader2,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const Loading = () => (
  <div className="flex h-64 items-center justify-center text-muted-foreground">
    <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden /> Chargement du module…
  </div>
)

const HomeSection = dynamic(() => import('./home-section'), { loading: Loading })
const ParcoursSection = dynamic(() => import('./parcours-section'), { loading: Loading })
const BibliothequeSection = dynamic(() => import('./bibliotheque-section'), { loading: Loading })
const SimulateurSection = dynamic(() => import('./simulateur-section'), { loading: Loading })
const CasesSection = dynamic(() => import('./cases-section'), { loading: Loading })
const QuizSection = dynamic(() => import('./quiz-section'), { loading: Loading })
const ExcelSection = dynamic(() => import('./excel-section'), { loading: Loading })
const OralSection = dynamic(() => import('./oral-section'), { loading: Loading })
const EvolutionSection = dynamic(() => import('./evolution-section'), { loading: Loading })
const ExperiencesSection = dynamic(() => import('./experiences-section'), { loading: Loading })
const ReferencesSection = dynamic(() => import('./references-section'), { loading: Loading })
const ParametresSection = dynamic(() => import('./parametres-section'), { loading: Loading })

interface NavItem {
  id: SectionId
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navGroups: { title: string; items: NavItem[] }[] = [
  {
    title: 'Formation',
    items: [
      { id: 'accueil', label: 'Accueil', icon: Home },
      { id: 'parcours', label: "Parcours d'apprentissage", icon: GraduationCap },
      { id: 'bibliotheque', label: 'Bibliothèque technique', icon: BookMarked },
    ],
  },
  {
    title: 'Entraînement',
    items: [
      { id: 'simulateur', label: "Simulateur d'entretien", icon: MessagesSquare },
      { id: 'cas', label: 'Cas pratiques', icon: FolderSearch },
      { id: 'quiz', label: 'Questions rapides', icon: HelpCircle },
      { id: 'oral', label: 'Réponses orales', icon: Mic },
      { id: 'excel', label: 'Excel & données', icon: Table2 },
    ],
  },
  {
    title: 'Suivi',
    items: [
      { id: 'evolution', label: 'Mon évolution', icon: TrendingUp },
      { id: 'experiences', label: 'Mes expériences réelles', icon: Briefcase },
    ],
  },
  {
    title: 'Ressources',
    items: [
      { id: 'references', label: 'Références', icon: Landmark },
      { id: 'parametres', label: 'Paramètres', icon: Settings },
    ],
  },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Basculer le mode clair ou sombre"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden />
    </Button>
  )
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const section = useAppStore((s) => s.section)
  const navigate = useAppStore((s) => s.navigate)
  const reviewCount = useAppStore((s) => Object.values(s.reviewCards).filter((c) => c.dueAt <= Date.now()).length)

  return (
    <nav aria-label="Navigation principale" className="flex flex-col gap-4 px-3 py-2">
      {navGroups.map((group) => (
        <div key={group.title}>
          <p className="mb-1 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {group.title}
          </p>
          <ul className="space-y-0.5">
            {group.items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    navigate(item.id)
                    onNavigate?.()
                  }}
                  className={cn(
                    'flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors',
                    section === item.id
                      ? 'bg-primary/10 font-medium text-primary'
                      : 'text-foreground/75 hover:bg-muted hover:text-foreground'
                  )}
                  aria-current={section === item.id ? 'page' : undefined}
                >
                  <item.icon className="h-4 w-4 shrink-0" aria-hidden />
                  <span className="truncate text-left">{item.label}</span>
                  {item.id === 'quiz' && reviewCount > 0 ? (
                    <Badge className="ml-auto h-5 px-1.5 text-[10px]">{reviewCount}</Badge>
                  ) : null}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export function AppShell() {
  const section = useAppStore((s) => s.section)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const sectionTitle = useMemo(() => {
    for (const g of navGroups) {
      const found = g.items.find((i) => i.id === section)
      if (found) return found.label
    }
    return 'Accueil'
  }, [section])

  const content = useMemo(() => {
    switch (section) {
      case 'accueil':
        return <HomeSection />
      case 'parcours':
        return <ParcoursSection />
      case 'bibliotheque':
        return <BibliothequeSection />
      case 'simulateur':
        return <SimulateurSection />
      case 'cas':
        return <CasesSection />
      case 'quiz':
        return <QuizSection />
      case 'oral':
        return <OralSection />
      case 'excel':
        return <ExcelSection />
      case 'evolution':
        return <EvolutionSection />
      case 'experiences':
        return <ExperiencesSection />
      case 'references':
        return <ReferencesSection />
      case 'parametres':
        return <ParametresSection />
      default:
        return <HomeSection />
    }
  }, [section])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* En-tête */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="flex h-14 items-center gap-2 px-3 sm:px-4">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Ouvrir le menu">
                <Menu className="h-5 w-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              <div className="flex h-14 items-center gap-2 border-b px-4">
                <ShieldCheck className="h-5 w-5 text-primary" aria-hidden />
                <span className="font-semibold">AuditLab</span>
              </div>
              <ScrollArea className="h-[calc(100vh-3.5rem)]">
                <NavLinks onNavigate={() => setMobileOpen(false)} />
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" aria-hidden />
            <div className="leading-tight">
              <p className="text-sm font-semibold">AuditLab</p>
              <p className="hidden text-[11px] text-muted-foreground sm:block">
                Simulateur d&apos;entretiens PFE — Audit · Contrôle interne · Comptabilité · Trésorerie
              </p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Rechercher dans la bibliothèque"
              onClick={() => {
                useAppStore.getState().navigate('bibliotheque')
                setSearchOpen(true)
                window.dispatchEvent(new CustomEvent('auditlab:focus-search'))
              }}
            >
              <Search className="h-4 w-4" aria-hidden />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Barre latérale (desktop) */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 border-r bg-sidebar lg:block">
          <ScrollArea className="h-full">
            <NavLinks />
          </ScrollArea>
        </aside>

        {/* Contenu */}
        <main className="min-w-0 flex-1">
          <div className="mx-auto w-full max-w-6xl px-4 py-6 pb-16 sm:px-6">
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground lg:hidden">
              <span className="font-medium text-foreground">{sectionTitle}</span>
            </div>
            {content}
          </div>
        </main>
      </div>

      {/* Pied de page collé en bas */}
      <footer className="mt-auto border-t bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            AuditLab — outil pédagogique. Toutes les entreprises, montants et documents sont
            fictifs et identifiés comme tels.
          </p>
          <p>Progression enregistrée localement dans ce navigateur uniquement.</p>
        </div>
      </footer>
    </div>
  )
}
