import type { BankQuestion } from '@/lib/types'
import { auditQuestions } from './questions/audit'
import { comptaTresorerieQuestions } from './questions/compta-tresorerie'
import { transversalRhQuestions } from './questions/transversal-rh'
import { transversalExcelGestionQuestions } from './questions/transversal-excel-gestion'

export const bankQuestions: BankQuestion[] = [
  ...auditQuestions,
  ...comptaTresorerieQuestions,
  ...transversalRhQuestions,
  ...transversalExcelGestionQuestions,
]
