import type { PracticalCase } from '@/lib/types'
import { casesPart1 } from './cases/part1'
import { casesPart2 } from './cases/part2'

// =====================================================================
// Laboratoire de cas pratiques — 12 dossiers complets (scénarios
// fictifs). Agrégation des deux fichiers sources ; les vérifications
// numériques (totaux, soldes, incidences) sont documentées dans le
// worklog et recalculées depuis les données réelles.
// =====================================================================

export const practicalCases: PracticalCase[] = [...casesPart1, ...casesPart2]
